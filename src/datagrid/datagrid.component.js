
import React from 'react';
import PropTypes from 'prop-types';

const DataGridComponent = ({sort,data,sortData}) =>(
    <table className="table table-hover">
        <thead className="btn-primary">
        <tr>
            <th onClick={() => {sortData('title') }}>
                Title
                {sort.title ?
                    <span className="glyphicon glyphicon-chevron-up"></span> :
                    <span className="glyphicon glyphicon-chevron-down"></span>
                }
            </th>
            <th onClick={() => {sortData('year') }}>
                Release Year
                {sort.year ?
                    <span className="glyphicon glyphicon-chevron-up"></span> :
                    <span className="glyphicon glyphicon-chevron-down"></span>
                }
            </th>
            <th onClick={() => {sortData('rating') }}>
                Rating
                {sort.rating ?
                    <span className="glyphicon glyphicon-chevron-up"></span> :
                    <span className="glyphicon glyphicon-chevron-down"></span>
                }
            </th>
            <th onClick={() => {sortData('genre') }}>
                Genre
                {sort.genre ?
                    <span className="glyphicon glyphicon-chevron-up"></span> :
                    <span className="glyphicon glyphicon-chevron-down"></span>
                }
            </th>
        </tr>
        </thead>
        <tbody>

        {data.map((val,key)=>{

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
)

DataGridComponent.propTypes={
    sortData:PropTypes.func.isRequired,
    sort:PropTypes.object.isRequired,
    data:PropTypes.array.isRequired
};

export default DataGridComponent;