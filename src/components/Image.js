import React from 'react';

export default class Image extends React.Component  {

  constructor(props, context) {
    super(props, context);

    this.state = {
      source: this.props.url,
      alt: this.props.name
    };
  }

    componentWillReceiveProps(nextProps) {
    if(nextProps.url!==this.props.url){
      this.setState({
        source: nextProps.url,
        alt: nextProps.name
      });
    }
  };

    render() {
    return (
		<div className="new-image new-image-only container">
			<img alt={`${this.props.name}`} src={`${this.props.url}`} className="image-slide" />
		</div>
    );
  }
}