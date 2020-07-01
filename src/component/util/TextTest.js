/*
 * @Author: your name
 * @Date: 2020-05-31 15:43:50
 * @LastEditTime: 2020-05-31 20:35:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\web\src\component\DirectiveTest.js
 */ 
import React, { Component } from 'react'

export default class TextTest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             source:[
                '01.扩张型⋈1收缩型与扩张型⋈1收扩型',
                '02.扩张型⋈1收扩型与扩张型⋈1收扩型',
                '03.收缩型⋈1收缩型与收缩型⋈1收缩型',
                '04.收扩型⋈1收缩型与收扩型⋈1收缩型',
                '05.收缩型⋈1收扩型与收缩型⋈1扩张型',
                '06.扩张型⋈1扩张型与扩张型⋈1扩张型',
                '07.收缩型⋈1收扩型与收缩型⋈1收扩型',
                '08.词相关缺陷⋈1TNF与词相关缺陷⋈1ENF',
                '09.收缩型⋈1扩张型与收缩型⋈1扩张型',
                '10.扩张型⋈1收缩型与扩张型⋈1收缩型',
                '11.扩张型⋈1扩张型与扩张型⋈1收扩型',
                '12.收扩型⋈1收扩型与收扩型⋈1扩张型',
                '13.收扩型⋈1扩张型和收扩型⋈1扩张型',
                '14.收缩型⋈1扩张型与收缩型⋈1收扩型',
                '15.扩张型⋈1扩张型与扩张型⋈1收扩型',
                '16.收扩型⋈1扩张型与收扩型⋈1收扩型',
                '17.收缩型⋈1收缩型与收缩型⋈1收扩型',
                '18.收扩型⋈1收缩型与收扩型⋈1收扩型(1)',
                '19.收扩型⋈1收缩型与收扩型⋈1收扩型(2)',
                '20.收扩型⋈1收缩型与收扩型⋈1收扩型(3)',
                '21.收扩型⋈1收缩型与收扩型⋈1收扩型(4)',                
              ]
        }
    }
    
    render() {
        let i=14;
        let date = 24
        
        return (
            this.state.source.map((title,index)=>{
                let k=0;
                date +=0.2;
                return (
                <div>
                <table id="score">
                    <tr>
                        <th colspan="4">测试用例2-{++i}</th>
                    </tr>
                    <tr>
                        <td>测试人员</td>
                        <td>刘勇琦</td>
                        <td>测试日期</td>
                        <td>2020/5/{parseInt(date)}</td>
                    </tr>
                    <tr>
                        <td>测试类型</td>
                        <td colspan = '3'>内容测试</td>
                    </tr>
                    <tr>
                        <td>测试内容</td>
                        <td colspan = '3'>{title}</td>
                    </tr>
                    <tr>
                        <td>测试操作</td>
                        <td colspan = '3'><li>观察${title}页面是否存在内容错误，语义不清的问题</li>
                        <li>点击内容跳转到动画演示页面。观察动画的图片是否能够正确的表达缺陷的含义</li>
                        </td>
                    </tr>
                    <tr>
                        <td>预期输出</td>
                        <td colspan = '3'>{`页面内部描述清晰，语法语义得当，表述清楚，动画能够清晰表达缺陷意义`}</td>
                    </tr>
                    <tr>
                        <td>实际输出</td>
                        <td colspan = '3'>{`页面内部描述清晰，语法语义得当，表述清楚，动画能够清晰表达缺陷意义`}</td>
                    </tr>
                    <tr>
                        <td>结论</td>
                        <td colspan = '3'>{`预期输出与实际输出相同。不存在语法语义错误，动画能够正确的表达缺陷的含义。`}</td>
                    </tr>
                </table>
                <br></br>
            </div>
            )
            })
   
        )
    }
}
