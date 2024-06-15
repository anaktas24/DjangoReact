import React from 'react';
import '../styles/NotFound.css';

function NotFound() {
  return (
      <div className="error">
        <div className="wrap">
          <div className="404">
            <pre><code>
            <span className="green">&lt;!</span><span>DOCTYPE html</span><span className="green">&gt;</span>
            <span className="orange">&lt;html&gt;</span>
            <span className="orange">&lt;style&gt;</span>
          * {
        }
            <span className="orange">&lt;/style&gt;</span>
            <span className="orange">&lt;body&gt;</span>
                      ERROR 404!
                FILE NOT FOUND!
            <span className="comment">&lt;!-- ERROR 404!
            FILE NOT FOUND!--&gt;
            </span>

            <br />
            <span className="info"></span>
              <br />

              <span className="orange">&nbsp;&lt;/body&gt;</span>

              <br/>
              <span className="orange">&lt;/html&gt;</span>
              </code></pre>
         </div>
        </div>
      </div>
  );
}

export default NotFound;
