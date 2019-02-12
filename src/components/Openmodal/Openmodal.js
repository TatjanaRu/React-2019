import React, { Component } from "react";
import "./Openmodal.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Openmodal extends Component{
    render(){
    const { onClose } = this.props;
    
    return (

        <div className="modal Openmodal" id="myModal" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" class="close" data-dismiss="modal" onClick={onClose}>&times;</button>
                    </div>
                    <div className="modal-body">
                        <h4 className="modal-title">Upload file</h4>
                        <form className="justify-content-left">
                            Caption: 
                            <input className="Openmodal__content mb-3" type="text" />
                            <input className="Openmodal__content mb-3" type="file" />
                        </form>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button type="button" class="btn btn-default Openmodal__button" data-dismiss="modal" onClick={onClose}>Cancel</button>
                        <button type="button" class="btn btn-success Openmodal__button" data-dismiss="modal">Load</button>
                    </div>
                </div> 
            </div>
        </div>
    )
    }
}

export default Openmodal;
