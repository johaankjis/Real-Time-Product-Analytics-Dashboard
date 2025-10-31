# Real-Time Product Analytics Dashboard

A comprehensive, real-time analytics dashboard built with Next.js for tracking user engagement, retention, feature adoption, and running A/B tests. This dashboard provides product managers and data analysts with actionable insights through interactive visualizations and statistical analysis.

## ✨ Features

### 📊 Overview Dashboard
- **Real-time Metrics**: Monitor Daily Active Users (DAU), Monthly Active Users (MAU), session duration, and total events
- **Live Activity Feed**: Real-time event stream showing user actions as they happen
- **Trend Visualization**: Interactive charts displaying user engagement trends over 30 days
- **Session Analytics**: Hourly session distribution with detailed breakdowns

### 👥 User Engagement
- **Session Analytics**: Track session frequency, duration, bounce rate, and pages per session
- **User Segmentation**: Analyze user behavior across different segments (Free, Pro, Enterprise)
- **Engagement Trends**: Visualize engagement patterns over time
- **Cohort Analysis**: Compare user behavior across different user groups

### 🔄 Retention Analysis
- **Cohort Tables**: Week-over-week retention tracking for user cohorts
- **Retention Curves**: Visualize Day 1, Day 7, and Day 30 retention rates
- **Trend Analysis**: Monitor retention improvements over time
- **Cohort Size Tracking**: Track new user acquisition

### 🎯 Feature Usage
- **Feature Adoption Funnel**: Track user progression through feature adoption stages
- **Usage Charts**: Monitor individual feature usage over time
- **Adoption Metrics**: Measure feature discovery and adoption rates
- **Cross-feature Analysis**: Understand feature interaction patterns

### 🧪 Hypothesis Testing
- **A/B Test Results**: Track active experiments with statistical significance
- **Statistical Analysis**: Built-in t-tests, chi-square tests, and confidence intervals
- **Test Success Tracking**: Monitor experiment outcomes and success rates
- **Data-driven Decision Making**: Make informed product decisions based on statistical evidence

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16.0](https://nextjs.org/) - React framework with App Router
- **UI Library**: [React 19.2](https://react.dev/) - Latest React version
- **Styling**: [Tailwind CSS 4.1](https://tailwindcss.com/) - Utility-first CSS framework
- **Components**: [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- **Charts**: [Recharts](https://recharts.org/) - Composable charting library
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) - Form validation

### Development
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) - Type-safe development
- **Package Manager**: [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- **Linting**: ESLint - Code quality and consistency

### Data Generation
- **Python Scripts**: Mock data generation for testing and development
  - `generate_analytics_data.py`: Simulates 1M+ daily events
  - `hypothesis_testing.py`: Statistical testing utilities

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended) or npm
- Python 3.x (for data generation scripts)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/johaankjis/Real-Time-Product-Analytics-Dashboard.git
   cd Real-Time-Product-Analytics-Dashboard
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the dashboard

### Building for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 📁 Project Structure

```
Real-Time-Product-Analytics-Dashboard/
├── app/                        # Next.js App Router
│   ├── dashboard/             # Dashboard pages
│   │   ├── engagement/        # User engagement analytics
│   │   ├── features/          # Feature usage tracking
│   │   ├── retention/         # Retention analysis
│   │   ├── testing/           # A/B testing & hypothesis testing
│   │   ├── layout.tsx         # Dashboard layout with navigation
│   │   └── page.tsx           # Main dashboard overview
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page (redirects to dashboard)
├── components/                # React components
│   ├── ui/                    # Reusable UI components (shadcn/ui)
│   ├── ab-test-results.tsx    # A/B test visualization
│   ├── engagement-charts.tsx  # Engagement metrics charts
│   ├── feature-adoption-funnel.tsx  # Feature adoption funnel
│   ├── feature-usage-chart.tsx      # Feature usage visualizations
│   ├── overview-charts.tsx    # Overview dashboard charts
│   ├── realtime-metrics.tsx   # Real-time activity feed
│   ├── retention-cohort-table.tsx   # Cohort retention table
│   ├── retention-curve.tsx    # Retention curve chart
│   ├── statistical-tests.tsx  # Statistical analysis components
│   ├── theme-provider.tsx     # Dark mode theme provider
│   └── user-segments.tsx      # User segmentation component
├── hooks/                     # Custom React hooks
├── lib/                       # Utility functions
├── public/                    # Static assets
├── scripts/                   # Python data generation scripts
│   ├── generate_analytics_data.py  # Mock data generator
│   └── hypothesis_testing.py       # Statistical testing utilities
├── styles/                    # Additional styles
├── components.json            # shadcn/ui configuration
├── next.config.mjs           # Next.js configuration
├── package.json              # Dependencies and scripts
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 📜 Available Scripts

- **`pnpm dev`** - Start development server on port 3000
- **`pnpm build`** - Build the application for production
- **`pnpm start`** - Start production server
- **`pnpm lint`** - Run ESLint to check code quality

## 🎨 Key Features Explained

### Real-time Metrics
The dashboard processes and displays over 1.2M events per day, providing instant insights into:
- Active user counts (DAU/MAU)
- Session durations and patterns
- Event tracking and user actions
- Geographic and segment-based analytics

### Statistical Analysis
Built-in statistical tools for data-driven decisions:
- Independent samples t-tests for A/B testing
- Chi-square tests for categorical data
- Confidence intervals and p-value calculations
- Bootstrap resampling for robust estimates

### Responsive Design
- Fully responsive layout that works on desktop, tablet, and mobile
- Dark mode support for comfortable viewing
- Accessible components following WCAG guidelines
- Smooth animations and transitions

### Data Visualization
- Interactive charts with hover details
- Time-series line charts for trends
- Bar charts for comparisons
- Funnel visualizations for conversion tracking
- Cohort tables for retention analysis

## 🔧 Configuration

### Theme Customization
The dashboard uses a dark theme by default. To customize colors, edit the CSS variables in `app/globals.css`.

### Environment Variables
Currently, the application runs with mock data. To connect to a real analytics backend:
1. Create a `.env.local` file
2. Add your API endpoints and credentials
3. Update the data fetching logic in components

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Charts powered by [Recharts](https://recharts.org/)
- Icons from [Lucide](https://lucide.dev/)

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Note**: This dashboard currently uses mock data for demonstration purposes. The data generation scripts in the `scripts/` directory can be used to generate realistic analytics data for testing and development.
