import type { ReactNode } from 'react';
import { ResourceList} from '@site/src/utils/outline/resources';
import { Card } from '../Card';

export default function HomeResource(): ReactNode {
  const heading = "Our Resources";
  return <Card 
            cardContents={ResourceList} 
            heading = {heading}
          />;
}
