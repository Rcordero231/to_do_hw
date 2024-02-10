import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import { Task } from "../types"
import Button from "react-bootstrap/Button"



type TaskCardProps = {
    task: Task,
    changeCompletedStatus: (taskID:number)=>void
}

export default function TaskCard({task, changeCompletedStatus}: TaskCardProps) {
    return (
        <Col xs={12} mj={6} lg={4}>
            <Card bg={task.completed ? "success" : "danger"} text="white" className="my-3">
                <Card.Header>{task.dateCreated.toString()}</Card.Header>
                <Card.Body>
                    <Card.Title>{task.name}</Card.Title>
                    <Card.Text>{task.description}</Card.Text>
                    <Button variant={task.completed ? 'danger' : 'success'} onClick={() => changeCompletedStatus(task.id)}>
                        Mark As{task.completed ? 'Incomplete' : 'Done'}
                    </Button>
                </Card.Body>
                {task.dueDate && <Card.Footer><b>Due: </b>{task.dueDate.toString()}</Card.Footer> }
            </Card>
        </Col>
    )
}