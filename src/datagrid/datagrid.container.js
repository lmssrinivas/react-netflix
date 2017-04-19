

import React from 'react';
import axios from 'axios';

import DataGridComponent from './datagrid.component';

class DataGridContainer extends React.Component{


    constructor(){

        super();

        this.state={

            data:[],
            tableData:[],
            sort:{
                genre : false,
                title:false,
                rating:false,
                year:false
            }

        };

        this.getData();
    }

    getData(){
        axios.get('./data.json').then(response=>{

            let data = response.data.data;
            let tableData = response.data.data;

            this.setState({
                data,
                tableData
            });
            this.sortData('title');
        })
    }

    filterData(event){


        let tableData=[];
        let data = [... this.state.data];
        let value = event.target.value.toLowerCase();
        value= value.trim();

        if(!value){
            tableData = data;
        }else{

            data.map(item => {

                for( let key in item) {

                    let type = typeof item[key];
                    if(type =='string'){

                        let index = item[key].toLowerCase().indexOf(value);
                        if(index >-1){
                            tableData.push(item);
                            break;
                        }
                    };
                }
            });
        }

        this.setState({
            tableData
        })
    }

    sortData(key){

        let sort = this.state.sort;
        sort[key] = !sort[key];

        let tableData =[...this.state.tableData];

        tableData.sort(function (a, b) {
            if(sort[key]){
                return b[key] > a[key]
            }else{
                return a[key] > b[key]
            }

        });

        this.setState({
            sort
        });
        this.setState({
            tableData
        });

    }

    render(){
        return (
            <div>
                <div className="container">

                    <div className="input-group input-group-lg page-header">
                        <span className="input-group-addon" id="sizing-addon1">
                            <span className="glyphicon glyphicon-search"></span>
                        </span>
                        <input type="text" onChange={this.filterData.bind(this)} className="form-control"
                               placeholder="Filter the data..." aria-describedby="sizing-addon1"/>
                    </div>

                    <DataGridComponent
                        sort={this.state.sort}
                        sortData={this.sortData.bind(this)}
                        data={this.state.tableData}
                    />
                    {this.state.tableData.length==0 &&
                    <h2>
                        No Records found.
                    </h2>
                    }

                </div>
            </div>
        )
    }
}

export default DataGridContainer;