import { Content } from '../../components/Content.js';
import { SiteNotice } from '../../components/SiteNotice.js';
import { MyHeader } from './MyHeader.js';
import { LastUpdated } from '../../components/LastUpdated.js';
import { Cats } from '../Cats.js';

function MainPage() {
  return (<>
    <MyHeader />
    <Content>
     
     <Cats />

    </Content>
    <SiteNotice />
    <LastUpdated />
  </>
  );
}

export default MainPage;
