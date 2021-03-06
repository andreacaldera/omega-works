import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import offerModule from '../modules/offer';

const Offer = ({ offer, expanded, toggleOfferDetails }) => (
  <div className="collapsible-card">
    <a href="/offers" className="row collapsible-card__header" onClick={(e) => toggleOfferDetails(e, offer.id)}>
      <div className="col">
        <img className="collapsible-card__thumbnail" alt={offer.title} src={offer.thumbnail} />
      </div>
      <div className="col-10 title">{offer.title}</div>
      <div className="col offer__header__price">{offer.price} CC</div>
    </a>
    <div className={`collapsible-card__details ${(expanded ? '' : 'sr-only')}`}>
      <div className="collapsible-card__details__avatar"><img alt={offer.user.name} src={offer.user.avatar} /></div>
      <div className="collapsible-card__details__image-container">
        {offer.image.map((offerImage) => <img key={offerImage} className="collapsible-card__details__image" alt={offer.title} src={offerImage} />)}
      </div>
      <div className="collapsible-card__details__description">{offer.description}</div>
    </div>
  </div>
);

Offer.propTypes = {
  offer: PropTypes.shape().isRequired,
  expanded: PropTypes.bool.isRequired,
  toggleOfferDetails: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleOfferDetails: (e, offerId) => {
    e.preventDefault();
    dispatch(offerModule.toggleOfferDetails(offerId));
  },
});

export default connect(null, mapDispatchToProps)(Offer);
