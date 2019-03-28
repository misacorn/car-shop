import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class AddCar extends React.Component {
  state = {
    open: false,
    model: "",
    brand: "",
    color: "",
    fuel: "",
    year: 0,
    price: 0
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addCar = () => {
    const newCar = {
      model: this.state.model,
      brand: this.state.brand,
      color: this.state.color,
      fuel: this.state.fuel,
      year: this.state.year,
      price: this.state.price
    };
    this.props.saveCar(newCar);
    this.handleClose();
  };

  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          ADD CAR
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Car</DialogTitle>
          <DialogContent>
            <TextField
              onChange={this.handleChange}
              autoFocus
              margin="dense"
              name="brand"
              label="Brand"
              fullWidth
            />
            <TextField
              onchange={this.handleChange}
              margin="dense"
              name="model"
              label="Model"
              fullWidth
            />
            <TextField
              onchange={this.handleChange}
              margin="dense"
              name="color"
              label="Color"
              fullWidth
            />
            <TextField
              onchange={this.handleChange}
              margin="dense"
              name="fuel"
              label="Fuel"
              fullWidth
            />
            <TextField
              onchange={this.handleChange}
              margin="dense"
              name="year"
              label="Year"
              fullWidth
            />
            <TextField
              onchange={this.handleChange}
              margin="dense"
              name="price"
              label="Price"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.addCar} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
