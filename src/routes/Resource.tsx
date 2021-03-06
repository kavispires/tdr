import { Input, Layout, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useTitle } from 'react-use';

import { DataLoadingWrapper } from '../components/DataLoadingWrapper';
import { ResourceSelectionBar } from '../components/ResourceSelectionBar';
import { SearchDuplicates } from '../components/SearchDuplicates';
import { useQueryParams } from '../hooks/useQueryParams';
import { useResourceState } from '../hooks/useResourceState';
import { RESOURCE_NAMES } from '../utils/constants';

const { Text, Title } = Typography;

function Resource() {
  useTitle('Resource');

  const [output, setOutput] = useState({});
  const property = 'text';

  const { resourceName, language, loading, error, updateResource, hasResponseData, response } =
    useResourceState(RESOURCE_NAMES, {});

  const { params } = useQueryParams({ resourceName, language }, updateResource);

  useEffect(() => {
    if (response) {
      setOutput(response);
    }
  }, [response]);

  return (
    <Layout>
      <ResourceSelectionBar
        title={`Data for ${resourceName}-${language}`}
        resourceNames={RESOURCE_NAMES}
        values={params}
        updateState={updateResource}
        hasResponseData={hasResponseData}
        loading={loading}
        error={error}
      />

      <Layout.Content className="content">
        <DataLoadingWrapper loading={loading} error={error} hasResponseData={hasResponseData}>
          <div className="parser-container">
            <div className="parser-main">
              <Title level={2}>Data</Title>
              <Text>Output</Text>
              <Input.TextArea
                name="output"
                id=""
                cols={15}
                rows={15}
                readOnly
                value={JSON.stringify(output, null, 4)}
              />
            </div>

            <aside className="parser-controls">
              <SearchDuplicates response={response} property={property} />
            </aside>
          </div>
        </DataLoadingWrapper>
      </Layout.Content>
    </Layout>
  );
}

export default Resource;
