import React from 'react';
import './css/bookrack.css'
const bookCoverList=[
    {bookName:'旁门左道',coverImg:'http://pic.imgcn.ihuaben.com/pic/book/201811/13585927-1542899712359-2Ob0386wy4_225-300.jpeg@210w',author:'velver',readTo:'36'},
    {bookName:'我真的长生不老',coverImg:'http://pic.imgcn.ihuaben.com/pic/book/201811/13585927-1542899712359-2Ob0386wy4_225-300.jpeg@210w',author:'初恋璀璨如夏花',readTo:'187'},
    {bookName:'将夜',coverImg:'http://pic.imgcn.ihuaben.com/pic/book/201811/13585927-1542899712359-2Ob0386wy4_225-300.jpeg@210w',author:'猫腻',readTo:'0'},
    {bookName:'将夜',coverImg:'http://pic.imgcn.ihuaben.com/pic/book/201811/13585927-1542899712359-2Ob0386wy4_225-300.jpeg@210w',author:'猫腻',readTo:'0'},
]
class Bookrack extends React.Component {
    constructor(props) {
        super(props)
    }

    inToBook = (redTo)=>{
        alert(redTo)
    }

    render() {
        return (
            <div id={'bookrack'}>
                <ul>
                    {
                        bookCoverList.map((book,index)=>{
                            return (
                                <li key={index} onClick={()=>this.inToBook(book.readTo)}>
                                    <img src={book.coverImg} className={'coverImg'} alt="封面图片"/>
                                    <span className={'ocverText'}>
                                        <span>{book.bookName}</span>
                                        <span>{book.author}</span>
                                        <span>已读至{book.readTo}章</span>
                                    </span>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        )
    }
}

export default Bookrack;