import React, { Component } from 'react'
import './Position.scss'

export default class Position extends Component {
    componentDidMount() {
        this.setState({
            datalist : this.props.datalist
        },()=>{
            let dom = this.state.ulRef.current;
            this.scrollHandlerEvent()
            dom.onmouseover = ()=>{
                clearInterval(this.timer)
            }
            dom.onmouseout = ()=>{
                this.scrollHandlerEvent()
            }
        }) 
    }
    componentWillUnmount(){
        let dom = this.state.ulRef.current;
        dom.onmouseover = null;
        dom.onmouseout = null;
        clearInterval(this.timer)
    }
    state = {
        ulRef : React.createRef(),
        datalist : [],
        listbox : React.createRef()
    }
    render() {
        return (
            <div id="Position"> 
                <div className="positon-header">
                        最新职位
                        <a href={this.props.morehref}>更多</a>
                </div>
               <div ref={this.state.listbox} className="position-list-box">
                    <ul ref={this.state.ulRef} className="position-list">
                            {
                                this.state.datalist.map((item,index)=>(
                                    <li key={index} className="position-list-item">
                                        <a href={item.href}>{item.title}</a>
                                        <span>{item.city}</span>
                                        <span>{item.time}</span>
                                    </li>
                                ))
                            }
                    </ul>
               </div>
            </div>
        )
    }
    scrollHandlerEvent = ()=>{
        let dom = this.state.ulRef.current;
        let listheight = this.state.ulRef.current.clientHeight;
        let listboxHeight = this.state.listbox.current.clientHeight;
        let scrolldistance = dom.offsetTop
        this.timer = setInterval(()=>{
            scrolldistance-=1
            dom.style.top = scrolldistance + "px"
            if(scrolldistance <=  listboxHeight - listheight){
                scrolldistance = 0
                dom.style.top = 0
            }
        },20)
}
}
