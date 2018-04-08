/*
* Title: React App to add a new doctor onto the blockchain
* Version: 00_01
* Author: Nzwisisa Chidembo <nzwisisa@gmail.com>
*/

import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import request from 'request';

import TxhashDetail from './components/txhash_detail';

class MyMain extends Component {
    constructor () {
      super()
      this.state = {
          practiceNo: '',
          firstName: '',
          lastName: '',
          physicalAddress: '',
          phoneNo: '',
          message: '',
          txhashDetail: {
            txState: false,
            txhash: ''
          }
      };

      this.onSubmit = this.onSubmit.bind(this);
    }

    //Add your endpoint and apikey below
    sicknoteEndPoint = ''
    apiKey = ''
    res = ''

    style = {
      margin: 0,
    };

    changeState = (data) => {
      this.setState({
        txhashDetail: {
          txState: true,
          txhash: data
        }
      });
    }

    onSubmit = async (event) => {
        event.preventDefault();

        request.post({
          headers: {
            'content-type' : 'application/json',
            'x-api-key': this.apiKey
          },
          url: this.sicknoteEndPoint,
          body: JSON.stringify({
              "request": {
                  "type": "AddDoctor",
                  "data": {
                      "practiceNo": Number(this.state.practiceNo),
                      "firstName": this.state.firstName,
                      "lastName": this.state.lastName,
                      "physicalAddress": this.state.physicalAddress,
                      "phoneNo": this.state.phoneNo
                  }
              }
          })
        }, function(error, response, body){
          this.setState({
            txhashDetail: {
              txState: true,
              txhash: String(JSON.parse(body).response.data.transactionHash)
            }
          });
        }.bind(this));
    };

    render() {
        if (this.state.txhashDetail.txState) {
          return (
            <div>
                <AppBar title="Add New Doctor" />
                    <div>
                      <TxhashDetail data={this.state.txhashDetail} />
                    </div>
            </div>
          );
        }

        return (
            <div>
                <AppBar title="Add New Doctor" />
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <TextField
                                hintText = 'Practice No.'
                                floatingLabelText = 'Practice No.'
                                onChange = {event => this.setState({practiceNo: event.target.value })}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText = 'First Name'
                                floatingLabelText = 'First Name'
                                onChange = {event => this.setState({firstName: event.target.value })}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText = 'Last Name'
                                floatingLabelText = 'Last Name'
                                onChange = {event => this.setState({lastName: event.target.value })}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText = 'Physical Address'
                                floatingLabelText = 'Physical Address'
                                onChange = {event => this.setState({physicalAddress: event.target.value })}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText = 'Phone No.'
                                floatingLabelText = 'Phone No.'
                                onChange = {event => this.setState({phoneNo: event.target.value })}
                            />
                        </div>
                        <div>
                            <RaisedButton label="SUBMIT" primary={true} style={this.style} fullWidth={true} type="submit"/>
                        </div>
                    </form>
            </div>
        );
    }
}

export default MyMain;
