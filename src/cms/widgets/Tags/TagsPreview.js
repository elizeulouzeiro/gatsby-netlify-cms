import React, { PureComponent } from "react";

import * as styles from "./styles.module.css";

class TagsPreview extends PureComponent {
  render() {
    const { value } = this.props;

    return (
      value.length > 0 && (
        <div>
          <strong>Tags</strong>
          <ul className={styles.tags}>
            {value?.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      )
    );
  }
}

export { TagsPreview };
