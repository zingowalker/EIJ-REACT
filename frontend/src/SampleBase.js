
export class SampleBase extends React.PureComponent {
    renderComplete() {
        /**custom render complete function */
    }
    componentDidMount() {
        setTimeout(() => {
            this.renderComplete();
        });
    }
}
export function updateSampleSection() { }
