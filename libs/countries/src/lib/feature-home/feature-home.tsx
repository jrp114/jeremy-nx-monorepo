import Layout from '../layout/layout';

export interface FeatureHomeProps {}

export function FeatureHome(props: FeatureHomeProps) {
  return (
    <Layout>
      <div className="tw-font-mono">Welcome to FeatureHome!</div>
    </Layout>
  );
}

export default FeatureHome;
