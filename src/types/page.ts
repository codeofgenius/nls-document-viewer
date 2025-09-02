export type LayoutProps = {
  children: React.ReactNode;
};

export type PageProps = {
  children: React.ReactNode;
};

export type ViewPageProps = {
  params: Promise<{ id: string }>;
};

export type EditPageProps = ViewPageProps;
