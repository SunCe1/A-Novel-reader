import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../header/Header';
import './css/all.css'
import Bookrack from '../centers/bookrack/Bookrack'
import NovelList from '../centers/novelList/NovelList'
import NovelSearch from '../centers/novelSearch/NovelSearch'
import More from '../centers/more/More'
const headers =[{headerName:"书架"},{headerName:"榜单"},{headerName:"搜索"},{headerName:"更多"}]
class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            header:headers[0]
        }


    }
    footerBtn= (e)=>{
        // alert(e)
        this.setState({
            header:headers[e]
        })
    };

    render() {
        return (
            <div id={'all'}>
                {/*头部*/}
                <Header headerText={this.state.header}/>
                {/*主体center 内容*/}
                <Router>
                    <div className={'center'}>
                        <div style={{borderTop:'1px solid #eeeeee',height:'3rem'}}></div>
                        <Route exact path="/" component={Bookrack} />
                        <Route path="/NovelList" component={NovelList} />
                        <Route path="/NovelSearch" component={NovelSearch} />
                        <Route path="/More" component={More} />
                        {/*底部*/}
                        <div className={'footer'}>
                             <div>
                                 <Link to="/">
                                     <span onClick={()=>this.footerBtn('0')}>书架</span>
                                 </Link>
                             </div>
                             <div>
                                 <Link to="/NovelList">
                                 <span onClick={()=>this.footerBtn('1')}>榜单</span>
                                 </Link>

                             </div>
                             <div>
                                 <Link to="/NovelSearch">
                                 <span onClick={()=>this.footerBtn('2')}>搜索</span>
                                 </Link>
                             </div>
                             <div>
                                 <Link to="/More">
                                 <span onClick={()=>this.footerBtn('3')}>更多</span>
                                 </Link>
                             </div>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

export default MainPage;