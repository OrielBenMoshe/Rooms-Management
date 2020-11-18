
import {Container} from '@material-ui/core'
import Header from './header/Header';
import Daybook from './dayBook/Daybook';
import DropBox from './dropBox/DropBox';



function OpenningPage() {
  return (
    <Container>
      <div className="OpenningPage">
          <Header/>
          <p>שלום דניאל,</p>
          <p>ברוכים הבאים למערכת זימון חדרים של בנימין טק למתי לשריין לך את החדר?</p>
          <form>
            <Daybook/>
            <DropBox/>
            <DropBox/>
            <DropBox/>
            <input type="submit" value="מתאים לי בדיוק" />
          </form>
      </div>
    </Container>
  );
}

export default OpenningPage;

