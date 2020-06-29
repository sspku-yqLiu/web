/*
 * @Author: your name
 * @Date: 2020-05-31 15:43:50
 * @LastEditTime: 2020-05-31 15:51:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\web\src\component\DirectiveTest.js
 */ 
import React, { Component } from 'react'

export default class ContentTest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             source:[
                '主页测试，',        '登陆界面测试',
                '账号注册界面测试',     '账号找回界面测试',
                '测试用例生成界面测试',   '缺陷诊断界面测试',
                '变体生成界面测试',     '层次关系展示页面测试',
                '基本单缺陷界面测试',    '同向双缺陷界面测试',
                '同向双缺陷内容界面测试',  '双向双缺陷测试',
                '双向双缺陷内容界面测试',  '测试用例历史记录界面测试',
                '缺陷诊断历史记录界面测试', '变体生成历史记录界面测试',
                '帮助界面测试',       '弹出确认窗口界面测试'
              ]
        }
    }
    
    render() {
        let i=0;
        let date = 24
        
        return (
            this.state.source.map((content,index)=>{
                let k=0;
                date +=0.2;
                return (
                <div>
                <table id="score">
                    <tr>
                        <th colspan="4">测试用例3-{++i}</th>
                    </tr>
                    <tr>
                        <td>测试人员</td>
                        <td>刘勇琦</td>
                        <td>测试日期</td>
                        <td>2020/5/{parseInt(date)}</td>
                    </tr>
                    <tr>
                        <td>测试类型</td>
                        <td colspan = '3'>界面测试</td>
                    </tr>
                    <tr>
                        <td>测试内容</td>
                        <td colspan = '3'>{content}</td>
                    </tr>
                    <tr>
                        <td>测试界面截图</td>
                        <td colspan = '3'></td>
                    </tr>
                    <tr>
                        <td>测试操作</td>
                        <td colSpan = '3'> </td>
                    </tr>
                    {/* <tr>
                        <td>测试用例复用</td>
                        <td colspan = '3'>{flag?(index>13?'将跳转到测试用例4-1-1 - 4-1-7继续进行测试':'将跳转到测试用例4-2-1 - 4-2-15继续进行测试'):'不存在测试用例复用'}</td>
                    </tr> */}
                    <tr>
                        <td>预期输出</td>
                        <td colspan = '3'></td>
                    </tr>
                    <tr>
                        <td>实际输出</td>
                        <td colspan = '3'></td>
                    </tr>
                    <tr>
                        <td>结论</td>
                        <td colspan = '3'></td>
                    </tr>
                </table>
                <br></br>
            </div>
            )
            })
   
        )
    }
}
