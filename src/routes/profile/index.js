import { h, Component } from 'preact';
import style from './style';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default class Profile extends Component {
	state = {
		
	};

	// gets called when this route is navigated to
	componentDidMount() {
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }) {
		return (
			<main>
				<h2 class="profile__title">My User Profile</h2>
				<div class={style.profile}>
					<div class="profile__avatar"></div>
					<div class="profile__item">
						<strong>First Name:</strong> Steven
					</div>				
					<div class="profile__item">
						<strong>Occupation:</strong> Front End Developer
					</div>
					<div class="profile__item">
						<strong>Favorite Food:</strong> Pizza
					</div>
					<div class="profile__item">
						<strong>Favorite Dessert:</strong> Cheesecake
					</div>
					<div class="profile__item">
						<strong>Preferred Language:</strong> JavaScript
					</div>
					<div class="profile__item">
						<strong>Favorite UI Framework:</strong> React/Preact
					</div>
				</div>
			</main>
		);
	}
}
