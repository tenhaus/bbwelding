import React from 'react';
import Radium from 'radium';

import Page from '../Page/Page';
import Style from './_ContactPage.Style';

class ContactPage extends React.Component {

  render() {
    return (
      <Page title='Contact'>
        <div style={Style.split}>

          {/* Contact Details*/}
          <div style={Style.left} key='left'>

            <div style={Style.detailSection}>
              <h3>Mailing Address</h3>
              <p>PO Box 10 Ft. Howard, MD 21052</p>
            </div>

            <div style={Style.detailSection}>
              <h3>Physical Address</h3>
              <p>4640 Northpoint Blvd. Edgemere, MD 21219</p>
            </div>

            <div style={Style.detailSection}>
              <h3>Telephone </h3>
              <p>410-388-1100</p>
            </div>

            <div style={Style.detailSection}>
              <h3>Facsimile</h3>
              <p>410-388-2742</p>
            </div>

            <div style={Style.detailSection}>
              <h3>Toll Free Fax</h3>
              <p>800-742-2246</p>
            </div>

            <div style={Style.detailSection}>
              <h3>Email</h3>
              <p>Ralph Eisenhuth, Jr. Corporate Secretary, <a className="email" href="mailto:ralph@bandbwelding.com">ralph@bandbwelding.com</a></p>
              <p>Sam Drumm III, CWI, <a className="email" href="mailto:sam@bandbwelding.com">sam@bandbwelding.com</a></p>
              <p>Dave Mills, Estimator, <a className="email" href="mailto:dave@bandbwelding.com">dave@bandbwelding.com</a></p>
              <p>Michele Dosch, Office Manager, <a className="email" href="mailto:michele@bandbwelding.com">michele@bandbwelding.com</a></p>
              <p>Tiffany Heron, Administrative Asst., <a className="email" href="mailto:tiffany@bandbwelding.com">tiffany@bandbwelding.com</a></p>
            </div>

          </div>

          {/* Directions */}
          <div style={Style.right} key='right'>
            <h3>Directions to the Shop</h3>
            <p>From the West or Northwest:</p>
            <p>Take I-695 South around Baltimore to the Key Bridge. Pay toll then exit onto #43. At head of ramp, turn left onto MD 158 (Beth Blvd). Take MD 158 to MD 151, turn left, go 0.3 miles, immediately after passing under railroad bridge, make right turn into B&B Welding.</p>
            <p>From the East or Northeast: </p>
            <p>Take I-695 South around Baltimore to exit #42. At the head of the ramp, turn North onto Md. 151 for 110 yds under railroad bridge and immediately turn right into B&B Welding Company.</p>

          </div>
        </div>
      </Page>
    );
  }
}

export default Radium(ContactPage);
