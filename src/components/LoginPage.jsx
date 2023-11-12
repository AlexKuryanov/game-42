import { useForm } from 'react-hook-form';
import { useAuthContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'

const LoginPage = () => {
	const { register, 
		handleSubmit 
	} = useForm();

	const navigate = useNavigate();

	const {logIn, user} = useAuthContext();

	useEffect(() => {
		if (user) {
      console.log(true);
      navigate('/');
    }
	}, [user, navigate])

	console.log(user)

	const submit = (data) => {
		console.log(data);
		logIn(data.name);
	}

	return (
		<form onSubmit={handleSubmit(submit)}>
			<div>
				<div>
					<label htmlFor="text">Name</label>
					<input type="text" {...register('name')} />
				</div>
				<button>Start the game!</button>
			</div>
		</form>
	)
};

export default LoginPage;