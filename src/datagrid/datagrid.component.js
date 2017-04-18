/**
 * Created by mlingolu on 4/17/17.
 */

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
            ]
        }

        this.getData();
    }

    getData(){
        const config = { headers: { 'Content-Type': 'multipart/form-data'} };

        axios.get('./data.xlsx',config).then(response=>{

        })

    }

    render(){
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">Panel heading</div>

                    <table className="table">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Release Year</th>
                            <th>Rating</th>
                            <th>Genre</th>
                        </tr>
                        </thead>
                        <tbody>

                        {this.state.data.map(val=>{

                            return (
                                <tr>
                                    <td>{val.title}</td>
                                    <td>{val.year}</td>
                                    <td>{val.rating}</td>
                                    <td>{val.genre}</td>

                                </tr>
                            )

                        })}

                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

export default DataGridComponent;