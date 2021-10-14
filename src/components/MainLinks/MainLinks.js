import React,{useState} from 'react';
import { IconContext } from 'react-icons/lib';
import {GiElectric} from 'react-icons/gi'
import {FaGasPump} from 'react-icons/fa'
import {GoArrowBoth} from 'react-icons/go'
import { Link } from 'react-router-dom';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  InfoLabel,

} from './MainLinksElements';
import { Modal } from '../Modal';
import {GasModel} from '../GasModel';
import {HybridModal} from '../HybridModal';
function MainLinks() {
    const [formData, setFormData] = useState({electric: [], gas: [], hybrid: []})
    const [showModal,setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev);
    };
    const [showGModal,setShowGModal] = useState(false);
    const openGModal = () => {
        setShowGModal(prev => !prev);
    };
    const [showHModal,setShowHModal] = useState(false);
    const openHModal = () => {
        setShowHModal(prev => !prev);
    };

  const saveClickHandler = (data, type) => {
    const updatedForm = {...formData}
    updatedForm[type] = formData[type].concat(data)
    setFormData(updatedForm)
  }

  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>My Interests</PricingHeading>
          <PricingContainer>
          <PricingCard onClick={openModal}>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiElectric/>
                </PricingCardIcon>
                <PricingCardPlan>Electric</PricingCardPlan>
               
              </PricingCardInfo>
            </PricingCard>
            <Modal showModal={showModal} setShowModal={setShowModal} onSave={saveClickHandler}/>
            
            <PricingCard onClick={openGModal}>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaGasPump/>
                </PricingCardIcon>
                <PricingCardPlan>Gas</PricingCardPlan>
               
              </PricingCardInfo>
            </PricingCard>
            <GasModel showGModal={showGModal} setShowGModal={setShowGModal} onSave={saveClickHandler}/>
            <PricingCard onClick={openHModal}>
                <PricingCardIcon>
                  <GoArrowBoth/>
                </PricingCardIcon>
                <PricingCardPlan>Hybrid</PricingCardPlan>
   
            </PricingCard>
            <HybridModal showHModal={showHModal} setShowHModal={setShowHModal} onSave={saveClickHandler}/>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
      <div>
          <InfoLabel>
            <h1>Information label</h1>
          </InfoLabel>
          {formData.electric.map(({make}) => {
            return (
            <div>
              <h4>{make}</h4>
            </div>
            )
          })}
          {formData.gas.map(({make}) => {
            return (
            <div>
              <h4>{make}</h4>
            </div>
            )
          })}
          {formData.hybrid.map(({make}) => {
            return (
            <div>
              <h4>{make}</h4>
            </div>
            )
          })}
        </div>
    </IconContext.Provider>
  );
}
export default MainLinks;
