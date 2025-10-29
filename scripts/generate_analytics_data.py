"""
Generate mock analytics data for the real-time dashboard
Simulates 1M+ daily events with realistic patterns
"""

import json
import random
from datetime import datetime, timedelta
from typing import List, Dict

# Configuration
NUM_USERS = 50000
NUM_DAYS = 90
EVENTS_PER_DAY = 1200000

# Feature list
FEATURES = [
    "dashboard_view",
    "profile_edit",
    "search",
    "export_data",
    "create_report",
    "share_content",
    "settings_update",
    "notification_view",
    "file_upload",
    "collaboration"
]

def generate_user_cohorts(num_users: int, num_days: int) -> List[Dict]:
    """Generate user cohorts with signup dates"""
    cohorts = []
    
    for user_id in range(num_users):
        signup_day = random.randint(0, num_days - 1)
        cohorts.append({
            "user_id": f"user_{user_id}",
            "signup_date": signup_day,
            "segment": random.choice(["free", "pro", "enterprise"]),
            "region": random.choice(["US", "EU", "APAC", "LATAM"])
        })
    
    return cohorts

def generate_daily_events(day: int, cohorts: List[Dict]) -> List[Dict]:
    """Generate events for a specific day"""
    events = []
    
    # Filter active users (those who signed up before this day)
    active_users = [c for c in cohorts if c["signup_date"] <= day]
    
    # Simulate retention drop-off
    retention_rate = 0.7 if day < 7 else 0.4 if day < 30 else 0.25
    active_today = random.sample(active_users, int(len(active_users) * retention_rate))
    
    for user in active_today:
        # Each user generates 5-50 events per day
        num_events = random.randint(5, 50)
        
        for _ in range(num_events):
            event = {
                "user_id": user["user_id"],
                "event_type": random.choice(FEATURES),
                "timestamp": day * 86400 + random.randint(0, 86399),  # Unix timestamp
                "session_id": f"session_{random.randint(1000, 9999)}",
                "segment": user["segment"],
                "region": user["region"]
            }
            events.append(event)
    
    return events

def calculate_dau_mau(cohorts: List[Dict], num_days: int) -> List[Dict]:
    """Calculate Daily Active Users and Monthly Active Users"""
    metrics = []
    
    for day in range(num_days):
        # Active users for this day
        active_users = [c for c in cohorts if c["signup_date"] <= day]
        retention_rate = 0.7 if day < 7 else 0.4 if day < 30 else 0.25
        dau = int(len(active_users) * retention_rate)
        
        # MAU: unique users in last 30 days
        if day >= 30:
            mau_rate = 0.6
            mau = int(len(active_users) * mau_rate)
        else:
            mau = dau
        
        metrics.append({
            "day": day,
            "date": (datetime.now() - timedelta(days=num_days - day)).strftime("%Y-%m-%d"),
            "dau": dau + random.randint(-500, 500),  # Add noise
            "mau": mau + random.randint(-1000, 1000),
            "total_users": len(active_users)
        })
    
    return metrics

def calculate_retention_cohorts(cohorts: List[Dict], num_days: int) -> List[Dict]:
    """Calculate retention by cohort"""
    cohort_data = []
    
    # Group by signup week
    for week in range(0, num_days, 7):
        week_cohort = [c for c in cohorts if week <= c["signup_date"] < week + 7]
        
        if not week_cohort:
            continue
        
        cohort_size = len(week_cohort)
        
        # Calculate retention for each subsequent week
        retention = {
            "cohort_week": f"Week {week // 7}",
            "cohort_date": (datetime.now() - timedelta(days=num_days - week)).strftime("%Y-%m-%d"),
            "size": cohort_size,
            "week_0": 100.0,  # Day 0 retention is always 100%
        }
        
        for retention_week in range(1, min(13, (num_days - week) // 7)):
            # Retention drops over time
            base_retention = 70 - (retention_week * 5)
            retention[f"week_{retention_week}"] = max(10, base_retention + random.uniform(-5, 5))
        
        cohort_data.append(retention)
    
    return cohort_data

def calculate_feature_usage(num_days: int) -> List[Dict]:
    """Calculate feature usage statistics"""
    feature_stats = []
    
    for feature in FEATURES:
        # Simulate different adoption rates
        base_usage = random.randint(10000, 100000)
        
        daily_usage = []
        for day in range(num_days):
            # Add trend and noise
            trend = day * random.randint(50, 200)
            noise = random.randint(-5000, 5000)
            usage = max(0, base_usage + trend + noise)
            
            daily_usage.append({
                "day": day,
                "date": (datetime.now() - timedelta(days=num_days - day)).strftime("%Y-%m-%d"),
                "count": usage
            })
        
        feature_stats.append({
            "feature": feature,
            "total_usage": sum(d["count"] for d in daily_usage),
            "avg_daily": sum(d["count"] for d in daily_usage) // num_days,
            "daily_data": daily_usage[-30:]  # Last 30 days
        })
    
    return feature_stats

def main():
    """Generate all analytics data"""
    print("Generating analytics data...")
    
    # Generate user cohorts
    print(f"Creating {NUM_USERS} user cohorts...")
    cohorts = generate_user_cohorts(NUM_USERS, NUM_DAYS)
    
    # Calculate DAU/MAU metrics
    print("Calculating DAU/MAU metrics...")
    dau_mau_data = calculate_dau_mau(cohorts, NUM_DAYS)
    
    # Calculate retention cohorts
    print("Calculating retention cohorts...")
    retention_data = calculate_retention_cohorts(cohorts, NUM_DAYS)
    
    # Calculate feature usage
    print("Calculating feature usage...")
    feature_data = calculate_feature_usage(NUM_DAYS)
    
    # Compile summary statistics
    summary = {
        "generated_at": datetime.now().isoformat(),
        "total_users": NUM_USERS,
        "days_analyzed": NUM_DAYS,
        "latest_dau": dau_mau_data[-1]["dau"],
        "latest_mau": dau_mau_data[-1]["mau"],
        "total_events_simulated": EVENTS_PER_DAY * NUM_DAYS,
        "avg_events_per_day": EVENTS_PER_DAY
    }
    
    # Output data
    output = {
        "summary": summary,
        "dau_mau": dau_mau_data,
        "retention_cohorts": retention_data,
        "feature_usage": feature_data,
        "user_cohorts_sample": cohorts[:100]  # Sample of users
    }
    
    print("\n=== Analytics Data Summary ===")
    print(f"Total Users: {summary['total_users']:,}")
    print(f"Latest DAU: {summary['latest_dau']:,}")
    print(f"Latest MAU: {summary['latest_mau']:,}")
    print(f"Total Events: {summary['total_events_simulated']:,}")
    print(f"Cohorts Generated: {len(retention_data)}")
    print(f"Features Tracked: {len(feature_data)}")
    
    # Save to JSON
    with open("analytics_data.json", "w") as f:
        json.dump(output, f, indent=2)
    
    print("\n✓ Data saved to analytics_data.json")
    print(f"✓ File size: ~{len(json.dumps(output)) / 1024:.1f} KB")

if __name__ == "__main__":
    main()
