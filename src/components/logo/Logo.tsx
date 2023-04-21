import "./css/index.css";
import {APP_NAME} from '../../constants/constants'

export const Logo = () => {
	return (
		<h1 className="font-bold text-text-black app-logo">
			{APP_NAME}
		</h1>
	);
};
