import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsers } from "./action/userActions.js";
import Editor from "./subs/Editor/Editor";
import Team from "./subs/Team/Team";
import About from "./subs/About/About";
import Contact from "./subs/Contact/Contact.js";
import RoadMap from "./subs/RoadMap/RoadMap.js";
import Fractionizer from "./subs/Fractionizer/Fractionizer.js";
import Swap from "./subs/Swap/Swap.js";
import Landing from "./subs/Landing/Landing.js";
import Account from "./subs/User/Account.js";
import Wallet from "./subs/User/Wallet.js";
import Settings from "./subs/User/Settings.js";
import Dashboard from "./subs/User/Dashboard.js";
import Won from "./subs/Surveys/Won.js";
class Screen extends Component {
  static propTypes = {
    getUsers: PropTypes.func,
    screenMode: PropTypes.string,
  };
  render() {
    return (
      <div id="screen" className="mb-4 p-5" style={{ backgroundColor: this.props.users.globalDisplayColor }}>
        {this.props.screenMode === "landing_lnk" ? (
          <Landing />
        ) : this.props.screenMode === "pyeditor_lnk" ? (
          <Editor />
        ) : this.props.screenMode === "about_lnk" ? (
          <About />
        ) : this.props.screenMode === "team_lnk" ? (
          <Team />
        ) : this.props.screenMode === "contact_lnk" ? (
          <Contact />
        ) : this.props.screenMode === "roadmap_lnk" ? (
          <RoadMap />
        ) : this.props.screenMode === "swap_lnk" ? (
          <Swap />
        ) : this.props.screenMode === "frx_lnk" ? (
          <Fractionizer />
        ) : this.props.screenMode === "team_lnk" ? (
          <Team />
        ) : this.props.screenMode === "account_lnk" ? (
          <Account />
        ) : this.props.screenMode === "wallet_lnk" ? (
          <Wallet />
        ) : this.props.screenMode === "settings_lnk" ? (
          <Settings />
        ) : this.props.screenMode === "dashboard_lnk" ? (
          <Dashboard />
        ) : this.props.screenMode === "review_lnk" ? (
          <Won />
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  users: state.userState,
  screenMode: state.userState.screenMode,
});
export default connect(mapStateToProps, { getUsers })(Screen);
