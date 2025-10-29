"""
Statistical hypothesis testing module for A/B tests and feature validation
Implements t-tests, chi-square tests, and bootstrapping
"""

import json
import random
from typing import List, Dict, Tuple
from dataclasses import dataclass
import math

@dataclass
class TestResult:
    """Result of a hypothesis test"""
    test_name: str
    statistic: float
    p_value: float
    significant: bool
    confidence_level: float
    interpretation: str

def mean(data: List[float]) -> float:
    """Calculate mean of a dataset"""
    return sum(data) / len(data) if data else 0

def variance(data: List[float]) -> float:
    """Calculate variance of a dataset"""
    if len(data) < 2:
        return 0
    m = mean(data)
    return sum((x - m) ** 2 for x in data) / (len(data) - 1)

def std_dev(data: List[float]) -> float:
    """Calculate standard deviation"""
    return math.sqrt(variance(data))

def t_test_independent(group_a: List[float], group_b: List[float], alpha: float = 0.05) -> TestResult:
    """
    Perform independent samples t-test
    Tests if two groups have significantly different means
    """
    n_a, n_b = len(group_a), len(group_b)
    mean_a, mean_b = mean(group_a), mean(group_b)
    var_a, var_b = variance(group_a), variance(group_b)
    
    # Pooled standard deviation
    pooled_std = math.sqrt(((n_a - 1) * var_a + (n_b - 1) * var_b) / (n_a + n_b - 2))
    
    # T-statistic
    t_stat = (mean_a - mean_b) / (pooled_std * math.sqrt(1/n_a + 1/n_b))
    
    # Degrees of freedom
    df = n_a + n_b - 2
    
    # Simplified p-value approximation (for demo purposes)
    # In production, use scipy.stats.t.sf
    p_value = 2 * (1 - 0.5 * (1 + math.erf(abs(t_stat) / math.sqrt(2))))
    
    significant = p_value < alpha
    
    interpretation = (
        f"Group A mean: {mean_a:.2f}, Group B mean: {mean_b:.2f}. "
        f"{'Significant' if significant else 'No significant'} difference detected "
        f"(p={p_value:.4f}, α={alpha})."
    )
    
    return TestResult(
        test_name="Independent T-Test",
        statistic=t_stat,
        p_value=p_value,
        significant=significant,
        confidence_level=1 - alpha,
        interpretation=interpretation
    )

def chi_square_test(observed: List[int], expected: List[int], alpha: float = 0.05) -> TestResult:
    """
    Perform chi-square goodness of fit test
    Tests if observed frequencies match expected frequencies
    """
    if len(observed) != len(expected):
        raise ValueError("Observed and expected must have same length")
    
    # Chi-square statistic
    chi_stat = sum((o - e) ** 2 / e for o, e in zip(observed, expected) if e > 0)
    
    # Degrees of freedom
    df = len(observed) - 1
    
    # Simplified p-value (for demo)
    p_value = math.exp(-chi_stat / 2) if chi_stat < 10 else 0.001
    
    significant = p_value < alpha
    
    interpretation = (
        f"Chi-square statistic: {chi_stat:.2f} (df={df}). "
        f"{'Significant' if significant else 'No significant'} difference between "
        f"observed and expected frequencies (p={p_value:.4f})."
    )
    
    return TestResult(
        test_name="Chi-Square Test",
        statistic=chi_stat,
        p_value=p_value,
        significant=significant,
        confidence_level=1 - alpha,
        interpretation=interpretation
    )

def bootstrap_confidence_interval(
    data: List[float], 
    n_iterations: int = 1000, 
    confidence: float = 0.95
) -> Tuple[float, float, float]:
    """
    Calculate bootstrap confidence interval for the mean
    """
    bootstrap_means = []
    
    for _ in range(n_iterations):
        sample = [random.choice(data) for _ in range(len(data))]
        bootstrap_means.append(mean(sample))
    
    bootstrap_means.sort()
    
    lower_idx = int((1 - confidence) / 2 * n_iterations)
    upper_idx = int((1 + confidence) / 2 * n_iterations)
    
    return (
        bootstrap_means[lower_idx],
        mean(data),
        bootstrap_means[upper_idx]
    )

def analyze_ab_test(
    control_conversions: int,
    control_total: int,
    treatment_conversions: int,
    treatment_total: int,
    alpha: float = 0.05
) -> Dict:
    """
    Analyze A/B test results for conversion rates
    """
    control_rate = control_conversions / control_total
    treatment_rate = treatment_conversions / treatment_total
    
    # Calculate lift
    lift = ((treatment_rate - control_rate) / control_rate) * 100
    
    # Pooled probability
    p_pool = (control_conversions + treatment_conversions) / (control_total + treatment_total)
    
    # Standard error
    se = math.sqrt(p_pool * (1 - p_pool) * (1/control_total + 1/treatment_total))
    
    # Z-statistic
    z_stat = (treatment_rate - control_rate) / se if se > 0 else 0
    
    # P-value (simplified)
    p_value = 2 * (1 - 0.5 * (1 + math.erf(abs(z_stat) / math.sqrt(2))))
    
    significant = p_value < alpha
    
    return {
        "control_rate": control_rate,
        "treatment_rate": treatment_rate,
        "lift_percent": lift,
        "z_statistic": z_stat,
        "p_value": p_value,
        "significant": significant,
        "confidence_level": 1 - alpha,
        "recommendation": (
            f"Treatment shows {abs(lift):.1f}% {'increase' if lift > 0 else 'decrease'} "
            f"in conversion rate. "
            f"{'Statistically significant' if significant else 'Not statistically significant'} "
            f"at {(1-alpha)*100}% confidence level."
        )
    }

def main():
    """Run example hypothesis tests"""
    print("=== Hypothesis Testing Examples ===\n")
    
    # Example 1: T-test for session duration
    print("1. T-Test: New UI vs Old UI (Session Duration)")
    old_ui_sessions = [random.gauss(520, 80) for _ in range(1000)]  # Mean: 520s
    new_ui_sessions = [random.gauss(580, 85) for _ in range(1000)]  # Mean: 580s
    
    result = t_test_independent(old_ui_sessions, new_ui_sessions)
    print(f"   {result.interpretation}\n")
    
    # Example 2: Chi-square test for feature adoption
    print("2. Chi-Square Test: Feature Usage Distribution")
    observed_usage = [15000, 12000, 8000, 5000, 3000]
    expected_usage = [10000, 10000, 10000, 10000, 3000]
    
    result = chi_square_test(observed_usage, expected_usage)
    print(f"   {result.interpretation}\n")
    
    # Example 3: A/B test for conversion rate
    print("3. A/B Test: New Onboarding Flow")
    ab_result = analyze_ab_test(
        control_conversions=450,
        control_total=10000,
        treatment_conversions=520,
        treatment_total=10000
    )
    print(f"   Control Rate: {ab_result['control_rate']:.2%}")
    print(f"   Treatment Rate: {ab_result['treatment_rate']:.2%}")
    print(f"   Lift: {ab_result['lift_percent']:.1f}%")
    print(f"   {ab_result['recommendation']}\n")
    
    # Example 4: Bootstrap confidence interval
    print("4. Bootstrap Confidence Interval: Retention Rate")
    retention_data = [random.gauss(0.65, 0.15) for _ in range(500)]
    lower, point, upper = bootstrap_confidence_interval(retention_data)
    print(f"   95% CI: [{lower:.2%}, {upper:.2%}]")
    print(f"   Point Estimate: {point:.2%}\n")
    
    # Save results
    results = {
        "t_test_example": {
            "old_ui_mean": mean(old_ui_sessions),
            "new_ui_mean": mean(new_ui_sessions),
            "significant": result.significant
        },
        "ab_test_example": ab_result,
        "generated_at": "2025-01-28"
    }
    
    with open("hypothesis_test_results.json", "w") as f:
        json.dump(results, f, indent=2)
    
    print("✓ Results saved to hypothesis_test_results.json")

if __name__ == "__main__":
    main()
