import React, { Component } from 'react';
import $ from 'jquery';

class ColorChooserModalComponent extends Component {
  constructor() {
    super();
    this.state = {show: false}
  }

  static getDerivedStateFromProps(props, state) {
    if(props.show !== state.show) {
      const show = props.show;
      const action = show ? 'show' : 'hide';

      $('#colorChooserModal').modal(action);
      return {show};
    }
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
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row pb-3">
                    <div className="col-6">
                      <div class="card bg-danger"><div class="card-body"></div></div>
                    </div>
                    <div className="col-6">
                      <div class="card bg-success"><div class="card-body"></div></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div class="card bg-primary"><div class="card-body"></div></div>
                    </div>
                    <div className="col-6">
                      <div class="card bg-warning"><div class="card-body"></div></div>
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