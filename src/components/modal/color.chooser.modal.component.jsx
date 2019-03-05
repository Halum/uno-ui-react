import React, { Component } from 'react';
import $ from 'jquery';

class ColorChooserModalComponent extends Component {
  constructor() {
    super();
    this.state = {}
  }

  static getDerivedStateFromProps(props, state) {
    const action = props.show ? 'show' : 'hide';
    $('#colorChooserModal').modal(action);
    return state;
  }

  render() {
    return (
      <div>
        <div className="modal fade" id="colorChooserModal" tabIndex="-1" role="dialog" aria-labelledby="colorChooserModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="colorChooserModalLabel">Choose Color</h5>
                <button type="button" onClick={()=>this.props.onClose()} className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row pb-3">
                    <div className="col-6">
                      <div className="card bg-danger"><div className="card-body"></div></div>
                    </div>
                    <div className="col-6">
                      <div className="card bg-success"><div className="card-body"></div></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="card bg-primary"><div className="card-body"></div></div>
                    </div>
                    <div className="col-6">
                      <div className="card bg-warning"><div className="card-body"></div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorChooserModalComponent;