import React, { Component } from 'react';

import { database } from '../firebase';
import styled from 'styled-components';

const HarvestedEmails = styled.div`
	font-size: 40%;
`;
class CapturedAddresses extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
		};
	}
	componentDidMount() {
		this.setState({ loading: false });
		this.dataRef = database.ref('/harvested_addresses');
		this.dataRef.on('value', snapshot => {
			this.setState({
				data: snapshot.val(),
				newData: '',
			});
		});
	}

	render() {
		return (
			<HarvestedEmails>
				<pre className="App--data">{JSON.stringify(this.state.data, null, 2)}</pre>
			</HarvestedEmails>
		);
	}
}
export default CapturedAddresses;
