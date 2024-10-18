import React, { useState } from 'react';

// Define types for daily and monthly data
interface DailyActivity {
  day: string;
  tasks: number;
}

interface MonthlyActivity {
  month: string;
  tasks: number;
}

// Union type to represent either daily or monthly data
type ActivityData = DailyActivity[] | MonthlyActivity[];

interface GraphActivityProps {
  daily: DailyActivity[]; // Accept Daily data
  monthly: MonthlyActivity[]; // Accept Monthly data
}

const GraphActivity: React.FC<GraphActivityProps> = ({ daily, monthly }) => {
  const [view, setView] = useState<'daily' | 'monthly'>('daily'); // State to toggle between daily and monthly views

  // Determine if the current data is daily or monthly
  const isDailyView = view === 'daily';
  const data = isDailyView ? daily : monthly;

  // Get the maximum number of tasks to normalize the bar heights
  const maxTasks = Math.max(...data.map((item) => item.tasks));

  // Calculate dynamic width and spacing for bars based on the number of items
  const totalBars = data.length;
  const cardWidth = 685; // Adjust as per your card width
  const barWidth = Math.floor(cardWidth / totalBars) - 10; // Calculate bar width dynamically
  const barSpacing = Math.floor((cardWidth - barWidth * totalBars) / (totalBars + 1)); // Space between bars

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow col-span-4">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="font-semibold leading-none tracking-tight">Overview</h3>
        <div className="flex justify-end">
          {/* Toggle buttons */}
          <button
            onClick={() => setView('daily')}
            className={`px-4 py-2 mr-2 text-sm rounded-lg ${
              isDailyView ? 'bg-primary text-white' : 'bg-muted-foreground text-white'
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => setView('monthly')}
            className={`px-4 py-2 text-sm rounded-lg ${
              !isDailyView ? 'bg-primary text-white' : 'bg-muted-foreground text-white'
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="p-6 pt-0 pl-2">
        <div className="recharts-responsive-container" style={{ width: '100%', height: 350, minWidth: 0 }}>
          <div
            className="recharts-wrapper"
            style={{
              position: 'relative',
              cursor: 'default',
              width: '100%',
              height: '100%',
              maxHeight: 350,
              maxWidth: 685,
            }}
          >
            <svg
              className="recharts-surface"
              width={685}
              height={350}
              viewBox="0 0 685 350"
              style={{ width: '100%', height: '100%' }}
            >
              <defs>
                <clipPath id="recharts1-clip">
                  <rect x={65} y={5} height={310} width={615} />
                </clipPath>
              </defs>

              {/* Y-axis labels: dynamically calculated based on maxTasks */}
              <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                <g className="recharts-cartesian-axis-ticks">
                  {[0, maxTasks * 0.25, maxTasks * 0.5, maxTasks * 0.75, maxTasks].map((value, index) => (
                    <g key={index} className="recharts-layer recharts-cartesian-axis-tick">
                      <text
                        stroke="none"
                        fontSize={12}
                        orientation="left"
                        width={60}
                        height={310}
                        x={57}
                        y={315 - (index * 310) / 4} // Adjust Y position
                        textAnchor="end"
                        fill="#888888"
                      >
                        <tspan x="57" dy="0.355em">{Math.round(value)} tasks</tspan>
                      </text>
                    </g>
                  ))}
                </g>
              </g>

              {/* X-axis bars */}
              <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                <g className="recharts-cartesian-axis-ticks">
                  <g className="recharts-layer recharts-bar fill-primary">
                    <g className="recharts-layer recharts-bar-rectangles">
                      <g className="recharts-layer">
                        {data.map((item, index) => {
                          const barHeight = (item.tasks / maxTasks) * 100; // Normalize height

                          return (
                            <g key={index} className="recharts-layer recharts-bar-rectangle">
                              <rect
                                x={barSpacing + index * (barWidth + barSpacing)} // Position each bar dynamically
                                y={350 - barHeight * 3} // Position vertically based on barHeight
                                width={barWidth} // Width of the bars
                                height={barHeight * 3} // Adjust height based on tasks
                                fill="currentColor"
                                className="recharts-rectangle fill-primary"
                              />
                              <text
                                x={barSpacing + index * (barWidth + barSpacing) + barWidth / 2} // Position the label under each bar
                                y={350 + 20}
                                textAnchor="middle"
                                fill="#888888"
                                fontSize="12"
                              >
                                {isDailyView && 'day' in item ? item.day : 'month' in item ? item.month : ''}
                              </text>
                            </g>
                          );
                        })}
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphActivity;
