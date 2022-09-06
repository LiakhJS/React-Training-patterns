import React from "react";
function WarningBanner(props) {
if(!props.warn) {
    return null;
    }
return (
<div>Warning!
</div>
)
}
class WarningPage extends React.Component {
constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
}
handleToggleClick()  {
    this.setState(state => ({
        showWarning: !state.showWarning
                            }))
                    }
render() {
    return (
<div>
<WarningBanner warn={this.state.showWarning} />
<button onClick={this.handleToggleClick}>
{this.state.showWarning ? 'hide' : 'show'}
</button>
</div>
            );
    }
}

export default WarningPage;

// В редких случаях может потребоваться позволить компоненту спрятать себя, хотя он уже и отрендерен другим компонентом. Чтобы этого добиться, верните null вместо того, что обычно возвращается на рендеринг.
// Например, будет ли содержимое <WarningBanner /> отрендерено, зависит от значения пропа под именем warn. Если значение false, компонент ничего не рендерит: