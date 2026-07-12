import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import 'jb-notification';
import '../../../docs/styles/ant-design.css';
import '../../../docs/styles/aurora.css';
import '../../../docs/styles/bootstrap.css';
import '../../../docs/styles/candy.css';
import '../../../docs/styles/carbon.css';
import '../../../docs/styles/cupertino.css';
import '../../../docs/styles/fluent.css';
import '../../../docs/styles/forest.css';
import '../../../docs/styles/material.css';
import '../../../docs/styles/porcelain.css';
import '../../../docs/styles/sunset.css';
import '../../../docs/styles/terminal.css';
import './styles/style-ant-design.css';
import './styles/style-aurora.css';
import './styles/style-bootstrap.css';
import './styles/style-candy.css';
import './styles/style-carbon.css';
import './styles/style-cupertino.css';
import './styles/style-fluent.css';
import './styles/style-forest.css';
import './styles/style-material.css';
import './styles/style-porcelain.css';
import './styles/style-sunset.css';
import './styles/style-terminal.css';

const meta = {
  title: "Components/JBNotification/Style",
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

type NotificationType = "INFO" | "SUCCESS" | "WARNING" | "ERROR";

const typeSamples: Array<{ type: NotificationType; title: string; description: string }> = [
  { type: "SUCCESS", title: "Changes saved", description: "The project settings are now live." },
  { type: "INFO", title: "Sync completed", description: "All records are up to date." },
  { type: "WARNING", title: "Review needed", description: "Some permissions need approval." },
  { type: "ERROR", title: "Upload failed", description: "Try again or choose another file." },
];

const styleSamples = [
  { name: "Carbon", themeClassName: "carbon-style", notificationClassName: "carbon-style" },
  { name: "Aurora", themeClassName: "aurora-style", notificationClassName: "aurora-style" },
  { name: "Forest", themeClassName: "forest-style", notificationClassName: "forest-style" },
  { name: "Sunset", themeClassName: "sunset-style", notificationClassName: "sunset-style" },
  { name: "Porcelain", themeClassName: "porcelain-style", notificationClassName: "porcelain-style" },
  { name: "Candy", themeClassName: "candy-style", notificationClassName: "candy-style" },
  { name: "Terminal", themeClassName: "terminal-style", notificationClassName: "terminal-style" },
  { name: "Material", themeClassName: "material-style", notificationClassName: "material-style" },
  { name: "Fluent", themeClassName: "fluent-style", notificationClassName: "fluent-style" },
  { name: "Bootstrap", themeClassName: "bootstrap-style", notificationClassName: "bootstrap-style" },
  { name: "Cupertino", themeClassName: "cupertino-style", notificationClassName: "cupertino-style" },
  { name: "Ant Design", themeClassName: "ant-design-style", notificationClassName: "ant-design-style" },
];

function NotificationSample({
  className,
  description,
  title,
  type,
}: {
  className: string;
  description: string;
  title: string;
  type: NotificationType;
}) {
  return React.createElement("jb-notification", {
    className,
    description,
    title,
    type,
  });
}

function NotificationStyleSample({
  notificationClassName,
  themeClassName,
}: {
  notificationClassName: string;
  themeClassName: string;
}) {
  return (
    <div className={`${themeClassName} notification-demo-stack`}>
      {typeSamples.map((sample) => (
        <NotificationSample
          key={sample.type}
          className={notificationClassName}
          description={sample.description}
          title={sample.title}
          type={sample.type}
        />
      ))}
    </div>
  );
}

export const Gallery: Story = {
  name: "Gallery",
  render: () => (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(22rem, 1fr))",
      gap: "1.25rem",
      alignItems: "start",
      width: "min(100%, 92rem)",
    }}>
      {styleSamples.map((sample) => (
        <section
          key={sample.notificationClassName}
          className={sample.themeClassName}
          style={{
            display: "grid",
            gap: "0.875rem",
            minWidth: 0,
            padding: "1rem",
            background: "var(--jb-surface, #ffffff)",
            border: "1px solid var(--jb-border-color, #e5e7eb)",
            borderRadius: "0.75rem",
            boxShadow: "0 0.75rem 1.75rem oklch(0% 0 0 / 0.08)",
          }}
        >
          <div style={{
            width: "100%",
            color: "var(--jb-text-primary, #334155)",
            fontSize: "0.875rem",
            fontWeight: 700,
            lineHeight: 1.4,
            textAlign: "center",
          }}>
            {sample.name}
          </div>
          <NotificationStyleSample {...sample} />
        </section>
      ))}
    </div>
  ),
};

export const Carbon: Story = {
  name: "Carbon",
  render: () => <NotificationStyleSample {...styleSamples[0]} />,
};

export const Aurora: Story = {
  name: "Aurora",
  render: () => <NotificationStyleSample {...styleSamples[1]} />,
};

export const Forest: Story = {
  name: "Forest",
  render: () => <NotificationStyleSample {...styleSamples[2]} />,
};

export const Sunset: Story = {
  name: "Sunset",
  render: () => <NotificationStyleSample {...styleSamples[3]} />,
};

export const Porcelain: Story = {
  name: "Porcelain",
  render: () => <NotificationStyleSample {...styleSamples[4]} />,
};

export const Candy: Story = {
  name: "Candy",
  render: () => <NotificationStyleSample {...styleSamples[5]} />,
};

export const Terminal: Story = {
  name: "Terminal",
  render: () => <NotificationStyleSample {...styleSamples[6]} />,
};

export const Material: Story = {
  name: "Material",
  render: () => <NotificationStyleSample {...styleSamples[7]} />,
};

export const Fluent: Story = {
  name: "Fluent",
  render: () => <NotificationStyleSample {...styleSamples[8]} />,
};

export const Bootstrap: Story = {
  name: "Bootstrap",
  render: () => <NotificationStyleSample {...styleSamples[9]} />,
};

export const Cupertino: Story = {
  name: "Cupertino",
  render: () => <NotificationStyleSample {...styleSamples[10]} />,
};

export const AntDesign: Story = {
  name: "Ant Design",
  render: () => <NotificationStyleSample {...styleSamples[11]} />,
};
