import React from "react";
import "./style.css";

function Todo() {
    return (
        <div className="container">
            <h1>Task List</h1>
            <p>Tasks are assigned to one or more people and can include priority and due date.</p>
            <p>Looking for a way to track tasks in context of a larger product roadmap? Check out the Roadmap template.</p>
            <p>↓ Click By Status to organize by assignee, priority, or due date.</p>
            <br></br>
            <table class="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Status</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Date Created</th>
                        <th scope="col">Due Date</th>
                        <th scope="col">Comments</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">Create Todo List</td>
                        <td>In Progress</td>
                        <td>Medium</td>
                        <td>1-7-20</td>
                        <td>1-10-20</td>
                        <td>No comments</td>
                    </tr>
                    <tr>
                        <td scope="row">Create Database with SQL</td>
                        <td>Not Started</td>
                        <td>High</td>
                        <td>1-8-20</td>
                        <td>1-8-20</td>
                        <td>No comments</td>
                    </tr>
                    <tr>
                        <td scope="row">CRUD implementation for Table</td>
                        <td>Not Started</td>
                        <td>High</td>
                        <td>1-9-20</td>
                        <td>1-9-20</td>
                        <td>No comments</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Todo;