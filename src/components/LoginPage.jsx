import { useForm } from 'react-hook-form';
import { useAuthContext } from '../../context';

const LoginPage = () => {
	const { register, formState: { errors }, handleSubmit } = useForm();

	const {logIn} = useAuthContext()

	const submit = (data) => {
		console.log(data);
		logIn(data.name)
	}

	return (
		<form onSubmit={handleSubmit(submit)}>
			<div>
				<div>
					<label htmlFor="text">Name</label>
					<input type="text" {...register('name')} />
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" {...register('email')} />
				</div>
				<button>Start the game!</button>
			</div>
		</form>
	)
};

export default LoginPage;