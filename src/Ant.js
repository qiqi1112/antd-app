import React from 'react'
import { DatePicker } from 'antd';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
class Ant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Layout>
            <Header>Header</Header>
            <Layout>
              <Sider>Sider</Sider>
              <Content>Content</Content>
            </Layout>
          </Layout>
        );
    }
}

export default Ant;
// class Ant extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {  }
//     // }
//     render() { 
//         return (
//             <DatePicker /> 
//             // <div>hello word</div>
//          );
//     }
// }

// export default Ant;