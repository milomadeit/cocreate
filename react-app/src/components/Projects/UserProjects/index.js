import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import './UserProjects.css'
import { getUserProjects } from "../../../store/projects";
import ProjectCard from "./ProjectCard";

function UserProjects() {
	const dispatch = useDispatch();
	const history = useHistory();
	const currentUser = useSelector((state) => state.session.user)
	const projects = useSelector((state) => state.projectReducer.userProjects)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		dispatch(getUserProjects())
		setIsLoading(false)


	}, [dispatch, currentUser, history, projects])

	if (!currentUser) {
		return <Redirect to="/" />;
	}

	if (isLoading) return <div>Loading...</div>


	return (
		<div>
			<ProjectCard />
		</div>
	);
	
}

export default UserProjects;