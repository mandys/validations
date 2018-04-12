import React, { Component } from 'react';
import { Container, Segment, Grid, Button, Header, Label } from 'semantic-ui-react'
import {
    Form, Input, TextArea, Checkbox, Radio, RadioGroup, Dropdown, Select,
  } from 'formsy-semantic-ui-react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canSubmit: false
        }
    }
    onValidSubmit = (formData) => {
        console.log('all validations passed')
        console.log(JSON.stringify(formData))
    }
    disableButton = () => {
        this.setState({ canSubmit: false });
    }

    enableButton = () => {
        this.setState({ canSubmit: true });
    }
    render() {
        const errorLabel = <Label pointing/>
        return (
            <Container fluid style={{minHeight: 800}}>
                <Segment padded raised style={{minHeight: 800}}>
                    <Grid centered columns={2}>
                        <Grid.Row centered columns={2}>
                            <Grid.Column computer={6} mobile={16}>
                                <Header as='h1'>Login</Header>
                                <Form onValidSubmit={ this.onValidSubmit } onValid={this.enableButton} onInvalid={this.disableButton}>
                                    <Form.Field>
                                        <Input
                                            name="email"
                                            placeholder="Email"
                                            icon="mail"
                                            iconPosition="left"
                                            validations="isEmail"
                                            required
                                            validationErrors={{ isEmail: 'Email not valid', isDefaultRequiredValue: 'Email is Required' }}
                                            errorLabel={errorLabel}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Input
                                            name="password"
                                            placeholder="Password"
                                            icon="lock"
                                            iconPosition="left"
                                            required
                                            validations="minLength:8"
                                            validationErrors={{
                                                minLength: 'Minimin of 8 characters',
                                                isDefaultRequiredValue: 'Password is Required',
                                            }}
                                            errorLabel={errorLabel}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Checkbox
                                            name="checkbox"
                                            label="I agree to everything"
                                            required
                                            validations="isTrue"
                                            validationErrors={{
                                                isTrue: 'This is non-negotiable',
                                                isDefaultRequiredValue: 'You\'ll have to check this box',
                                            }}
                                        />
                                    </Form.Field>
                                    <Button type='submit' disabled={!this.state.canSubmit}>Submit</Button>
                                </Form>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Container>
        );
    }
}

export default App;
