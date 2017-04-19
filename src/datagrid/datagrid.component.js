

import React from 'react';
import axios from 'axios';

class DataGridComponent extends React.Component{


    constructor(){

        super();

        this.state={

            data:[
                {
                    title:'House of Cards: Season 5',
                    year:'2017',
                    rating:'TV-MA',
                    genre:'Crime TV Shows'
                },
                {
                    title:'The Crown: Season 1',
                    year:'2016',
                    rating:'TV-MA',
                    genre:'British TV Shows'
                },
                {
                    title:'Stranger Things: Season 1',
                    year:'2016',
                    rating:'TV-14',
                    genre:'TV Sci-Fi and Fantasy'
                },
                {
                    title:'Orange is the New Black: Season 5',
                    year:'2017',
                    rating:'TV-MA',
                    genre:'TV Dramedies'
                },
                {
                    title:'Narcos: Season 2',
                    year:'2016',
                    rating:'TV-MA',
                    genre:'Crime TV Shows'
                },
                {
                    title:'Sense8: Season 2',
                    year:'2017',
                    rating:'TV-MA',
                    genre:'TV Sci-Fi and Fantasy'
                },
                {
                    title:'Luke Cage: Season 1',
                    year:'2016',
                    rating:'TV-MA',
                    genre:'Comic Book TV Shows'
                }
            ],
            tableData:[],
            sort:{
                genre : false,
                title:false,
                rating:false,
                year:false
            }

        }

        this.state.tableData = this.state.data;
        this.getData();
        this.sortData('title');
    }

    getData(){
        const config = { headers: { 'Content-Type': 'multipart/form-data'} };

        axios.get('./data.xlsx',config).then(response=>{

            this.state.tableData = this.state.data;
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

                    <table className="table table-hover">
                        <thead className="btn-primary">
                        <tr>
                            <th onClick={() => { this.sortData('title') }}>
                                Title
                                {this.state.sort.title ?
                                    <span className="glyphicon glyphicon-chevron-up"></span> :
                                    <span className="glyphicon glyphicon-chevron-down"></span>
                                }
                            </th>
                            <th onClick={() => { this.sortData('year') }}>
                                Release Year
                                {this.state.sort.year ?
                                    <span className="glyphicon glyphicon-chevron-up"></span> :
                                    <span className="glyphicon glyphicon-chevron-down"></span>
                                }
                            </th>
                            <th onClick={() => { this.sortData('rating') }}>
                                Rating
                                {this.state.sort.rating ?
                                    <span className="glyphicon glyphicon-chevron-up"></span> :
                                    <span className="glyphicon glyphicon-chevron-down"></span>
                                }
                            </th>
                            <th onClick={() => { this.sortData('genre') }}>
                                Genre
                                {this.state.sort.genre ?
                                    <span className="glyphicon glyphicon-chevron-up"></span> :
                                    <span className="glyphicon glyphicon-chevron-down"></span>
                                }
                            </th>
                        </tr>
                        </thead>
                        <tbody>

                        {this.state.tableData.map((val,key)=>{

                            return (
                                <tr key={val.title}>
                                    <td >{val.title}</td>
                                    <td>{val.year}</td>
                                    <td>{val.rating}</td>
                                    <td>{val.genre}</td>

                                </tr>
                            )

                        })}
                        </tbody>
                    </table>
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

export default DataGridComponent;