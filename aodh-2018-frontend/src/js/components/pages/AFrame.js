import React, { Component } from "react";
import { createFilter } from "react-search-input";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";

import JapanIcon from "../../../images/jp.png";
import KoreaIcon from "../../../images/kr.png";
import TaiwanIcon from "../../../images/tw.png";

// import aframe_html from "../../../data/aframe-html/aframe.html";
const webpage_shibuya = "https://ambiguous-vein-rshubuya.glitch.me";
const webpage_harajuku = "https://ambiguous-vein-harajuku.glitch.me";
const webpage_taipei = "https://ambiguous-vein-taiwan.glitch.me";
const webpage_tokyo = "https://ambiguous-vein-tokyo-station.glitch.me";
const webpage_seoul = "https://ambiguous-vein-seoul.glitch.me";

export default class AFrame extends Component {
  state = {
    keyword: ""
  };

  handleUpdate(e) {
    e.preventDefault();
    this.setState({ keyword: e.target.value });
  }

  render() {
    // const { data } = this.props;

    const imgStyle = {
      height: "30px",
      width: "30px"
    };

    const imgStyleTW = {
      height: "20px",
      width: "20px",
      padding: "5px"
    };

    const filtered = sorted_merge.filter(
      createFilter(this.state.keyword, KEYS_TO_FILTERS)
    );
    const listHashtags = filtered.map((v, i) => {
      const { label, score } = v;
      const link = TW_PATH + label.replace("#", "");

      if (score) {
        return (
          <tr className="relevant" key={i}>
            <td>
              <button onClick={this.handleCopy.bind(this, label)}>
                <i className="fal fa-copy" />
              </button>
              <a href={link} className="table-external-link" target="_blank">
                <i className="fal fa-link" />
                {label}
              </a>
            </td>
            <td>
              <span
                className="dot"
                style={{
                  opacity: score / topScore
                }}
              />
              {score}
            </td>
          </tr>
        );
      } else {
        return (
          <tr className="non-relevant" key={i}>
            <td>
              <a href={link} className="table-external-link" target="_blank">
                <i className="fal fa-external-link" />
                {label}
              </a>
            </td>
            <td>No</td>
            <td>
              <span className="dot" />-
            </td>
          </tr>
        );
      }
    });

    return (
      <div className="page-size">
        <TextField
          fullWidth
          InputProps={{
            inputComponent,
            inputProps: {
              className: props.selectProps.classes.input,
              ref: props.innerRef,
              children: props.children,
              ...props.innerProps
            }
          }}
        />
        <List component="nav">
          <ListItem button component="a" target="_blank" href={webpage_shibuya}>
            <ListItemIcon>
              {/* <CityIcon /> */}
              <img src={JapanIcon} style={imgStyle} alt="jp" />
            </ListItemIcon>
            <ListItemText primary="Shibuya" />
          </ListItem>
          <ListItem
            button
            component="a"
            target="_blank"
            href={webpage_harajuku}
          >
            <ListItemIcon>
              <img src={JapanIcon} style={imgStyle} alt="jp" />
            </ListItemIcon>
            <ListItemText primary="Harajuku" />
          </ListItem>
          <ListItem button component="a" target="_blank" href={webpage_tokyo}>
            <ListItemIcon>
              <img src={JapanIcon} style={imgStyle} alt="jp" />
            </ListItemIcon>
            <ListItemText primary="Tokyo" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button component="a" target="_blank" href={webpage_taipei}>
            <ListItemIcon>
              <img src={TaiwanIcon} style={imgStyleTW} alt="tw" />
            </ListItemIcon>
            <ListItemText primary="Taipei" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button component="a" target="_blank" href={webpage_seoul}>
            <ListItemIcon>
              <img src={KoreaIcon} style={imgStyle} alt="kr" />
            </ListItemIcon>
            <ListItemText primary="Seoul" />
          </ListItem>
        </List>
      </div>
    );
  }
}
