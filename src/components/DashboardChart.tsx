import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveChoropleth } from '@nivo/geo';
import moroccoGeoData from '../data/morocco-regions.json';

const DashboardChart = () => {
  const { t } = useTranslation();
  const [activeView, setActiveView] = useState('budget');

  const budgetData = [
    { region: 'Casablanca-Settat', budget: 82.5, investment: 24.3, population: 6.9 },
    { region: 'Rabat-Salé-Kénitra', budget: 65.2, investment: 18.7, population: 4.6 },
    { region: 'Tanger-Tétouan-Al Hoceima', budget: 45.8, investment: 15.2, population: 3.7 },
    { region: 'Fès-Meknès', budget: 38.4, investment: 12.1, population: 4.2 },
    { region: 'Marrakech-Safi', budget: 35.6, investment: 11.8, population: 4.5 },
    { region: 'Souss-Massa', budget: 32.1, investment: 10.5, population: 2.7 }
  ];

  const sectorData = [
    { id: 'Education', value: 25.3 },
    { id: 'Santé', value: 18.7 },
    { id: 'Infrastructure', value: 15.4 },
    { id: 'Agriculture', value: 12.8 },
    { id: 'Sécurité', value: 10.2 },
    { id: 'Autres', value: 17.6 }
  ];

  const timelineData = [
    {
      id: 'Budget Total',
      data: [
        { x: '2020', y: 450 },
        { x: '2021', y: 475 },
        { x: '2022', y: 490 },
        { x: '2023', y: 505 },
        { x: '2024', y: 519.2 }
      ]
    }
  ];

  const mapData = budgetData.map(item => ({
    id: item.region,
    value: item.budget
  }));

  const renderChart = () => {
    switch (activeView) {
      case 'budget':
        return (
          <ResponsiveBar
            data={budgetData}
            keys={['budget', 'investment']}
            indexBy="region"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            colors={['#006233', '#C1272D']}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: -45,
              legend: 'Région',
              legendPosition: 'middle',
              legendOffset: 45
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Milliards DH',
              legendPosition: 'middle',
              legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            legends={[
              {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20
              }
            ]}
            animate={true}
          />
        );
      case 'sectors':
        return (
          <ResponsivePie
            data={sectorData}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={{ scheme: 'category10' }}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            radialLabelsSkipAngle={10}
            radialLabelsTextXOffset={6}
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={0}
            radialLabelsLinkDiagonalLength={16}
            radialLabelsLinkHorizontalLength={24}
            radialLabelsLinkStrokeWidth={1}
            radialLabelsLinkColor={{ from: 'color' }}
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor="#333333"
            animate={true}
            legends={[
              {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'circle'
              }
            ]}
          />
        );
      case 'timeline':
        return (
          <ResponsiveLine
            data={timelineData}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Année',
              legendOffset: 36,
              legendPosition: 'middle'
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Milliards DH',
              legendOffset: -40,
              legendPosition: 'middle'
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)'
              }
            ]}
          />
        );
      case 'map':
        return (
          <ResponsiveChoropleth
            data={mapData}
            features={moroccoGeoData.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="greens"
            domain={[0, 100]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={4000}
            projectionTranslation={[0.5, 0.5]}
            projectionRotation={[0, 0, 0]}
            borderWidth={0.5}
            borderColor="#152538"
            legends={[
              {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: '#444444',
                itemOpacity: 0.85,
                symbolSize: 18
              }
            ]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">{t('dashboard.title')}</h3>
        <div className="flex space-x-2">
          {['budget', 'sectors', 'timeline', 'map'].map((view) => (
            <button
              key={view}
              onClick={() => setActiveView(view)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeView === view
                  ? 'bg-morocco-green text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[500px]">
        {renderChart()}
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-morocco-green bg-opacity-10 p-4 rounded-lg">
          <h4 className="font-semibold text-morocco-green">{t('dashboard.budget')}</h4>
          <p className="text-2xl font-bold text-morocco-green">519.2 Mrd DH</p>
        </div>
        <div className="bg-morocco-red bg-opacity-10 p-4 rounded-lg">
          <h4 className="font-semibold text-morocco-red">{t('dashboard.investment')}</h4>
          <p className="text-2xl font-bold text-morocco-red">106.5 Mrd DH</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-700">{t('dashboard.debt')}</h4>
          <p className="text-2xl font-bold text-gray-900">105 Mrd DH</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardChart;