import {Avatar} from '@rneui/base';
import React, {useLayoutEffect, useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, Text} from 'react-native';
import {colors} from '../../Utils/Colors';
import ExpandableView from '@pietile-native-kit/expandable-view';
import {styles} from './LegalPoliciesStyle';
function LegalPoliciesScreen(props) {
  const [showOpenSourceLicenses, setShowOpenSourceLicenses] = useState(false);
  const [isTermAndCondition, setisTermAndCondition] = useState(false);
  const [isPrivacyPolicies, setisPrivacyPolicies] = useState(false);
  const [antiPhising, setantiPhising] = useState(false);
  const [IsReturen, setIsReturen] = useState(false);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => props.navigation.pop()}>
          <Avatar
            size={35}
            icon={{
              name: 'left',
              type: 'antdesign',
              color: colors.white,
            }}
            containerStyle={{marginTop: '5%'}}
          />
        </Pressable>
      ),
    });
  }, [props.navigation]);
  function onPress() {
    setShowOpenSourceLicenses(!showOpenSourceLicenses);
  }
  const showterm = () => {
    setisTermAndCondition(!isTermAndCondition);
  };
  const showPrivacy = () => {
    setisPrivacyPolicies(!isPrivacyPolicies);
  };
  const showAntiPhising = () => {
    setantiPhising(!antiPhising);
  };
  return (
    <SafeAreaView style={[styles.conatiner]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Term and Condition */}
        <Pressable
          style={[styles.cardstyle, styles.flexDirectionWithJustify]}
          onPress={() => showterm()}>
          <Text style={[styles.label]}>Term and Condition</Text>
          <Avatar
            icon={{
              name: !isTermAndCondition ? 'right' : 'down',
              type: 'antdesign',
              color: !isTermAndCondition
                ? colors.black
                : colors.AppDefaultColor,
              size: 25,
            }}
          />
        </Pressable>

        <ExpandableView show={isTermAndCondition}>
          <ScrollView style={[styles.extendstyle]}>
            <Text style={[styles.termheadingtxt]}>DAILY HOUSING</Text>
            <Text
              style={[
                styles.subheading,
                {alignSelf: 'center', marginLeft: '0%'},
              ]}>
              Terms and Conditions
            </Text>
            <Text style={[styles.txtprivacy]}>
              Please read these terms and conditions ("Terms") carefully before
              accessing or using the Platform (defined hereinafter). These Terms
              along with the Privacy Policy published on the Platform ("Privacy
              Policy") and other policies (as may be
              notified/displayed/published on the Platform) constitutes the
              contract between the Users of this Platform and Company
              (collectively "Agreement"). By use of the Platform, Users agree to
              be bound by these Agreement as posted on the Platform from time to
              time.
            </Text>
            <Text style={[styles.subheading]}>1. ABOUT THE TERMS</Text>
            <Text style={[styles.subheading]}>
              1.1 What is Daily Houseing and who operates it?
            </Text>
            <Text style={[styles.txtprivacy]}>
              Daily Houseing is an application which provides an online
              marketplace ("Application") where registered suppliers
              ("Suppliers") can offer to sell their products to registered users
              of Application including to resellers ("Resellers") and other
              Users. The Application and the website at www.DailyHouseing.com
              ("Website") (collectively, "Platform") are operated by Fashnear
              Technologies Private Limited ("Company"). The Company’s role is
              limited to the managing Application and associated marketing,
              facilitating payment collections, fulfilment, order management,
              enquiry management and other incidental services to enable the
              transactions between the Suppliers and the Reseller ("Services").
              Services are not made available on the Website and to avail the
              same, Users are required to install the Application.
            </Text>

            <Text style={[styles.subheading]}>
              1.1 What is Daily Houseing and who operates it?
            </Text>

            <Text style={[styles.txtprivacy]}>
              Daily Houseing is an application which provides an online
              marketplace ("Application") where registered suppliers
              ("Suppliers") can offer to sell their products to registered users
              of Application including to resellers ("Resellers") and other
              Users. The Application and the website at www.DailyHouseing.com
              ("Website") (collectively, "Platform") are operated by Fashnear
              Technologies Private Limited ("Company"). The Company’s role is
              limited to the managing Application and associated marketing,
              facilitating payment collections, fulfilment, order management,
              enquiry management and other incidental services to enable the
              transactions between the Suppliers and the Reseller ("Services").
              Services are not made available on the Website and to avail the
              same, Users are required to install the Application.
            </Text>
          </ScrollView>
        </ExpandableView>
        {/* Privacy Policy */}
        <Pressable
          style={[styles.cardstyle, styles.flexDirectionWithJustify]}
          onPress={() => showPrivacy()}>
          <Text style={[styles.label]}>Privacy Policy</Text>
          <Avatar
            icon={{
              name: !isPrivacyPolicies ? 'right' : 'down',
              type: 'antdesign',
              color: !isPrivacyPolicies ? colors.black : colors.AppDefaultColor,
              size: 25,
            }}
          />
        </Pressable>

        <ExpandableView show={isPrivacyPolicies}>
          <ScrollView style={styles.extendstyle}>
            <Text style={[styles.termheadingtxt]}>DAILY HOUSING</Text>
            <Text
              style={[
                styles.subheading,
                {alignSelf: 'center', marginLeft: '0%'},
              ]}>
              Privacy Policy
            </Text>
            <Text style={[styles.txtprivacy]}>
              The Daily Housing application and website (“Platform”) are made
              available to you by Fashnear Technologies Private Limited and/or
              its affiliates (hereinafter may be referred to as the ‘Company’,
              ‘we’, ‘us’, and ‘our’) respect your privacy and is committed to
              protecting it through its compliance with its privacy policy. This
              policy amongst other things describes: (i) the type of information
              that the Company may collect from you when you access or use its
              websites, applications and other online services (hereinafter
              collectively referred to as the ‘Services’); and, (ii) the
              Company’s practices for collecting, using, maintaining, protecting
              and disclosing that information. We encourage you to read this
              policy carefully to understand the Company's policies and
              practices regarding your information. By accessing or using its
              Services and/or registering for an account with the Company, you
              expressly agree to be bound by the terms and conditions of this
              privacy policy and you are consenting to the Company's collection,
              use, disclosure and retention of your personal information as
              described here. This policy may change from time to time, your
              continued use of the Company's Services after it makes any change
              is deemed to be acceptance of those changes, so please check the
              policy periodically for updates.
            </Text>
            <Text style={[styles.subheading]}>
              1. Applicability of the Policy
            </Text>
            <Text style={[styles.txtprivacy]}>
              1.1. This policy applies only to the information the Company
              collects through its Services, in email, text and other electronic
              communications sent through or in connection with its Services.
              {'\n'}
              1.2. This Policy does not apply to the information that you
              provide to, or that is collected by, any third-party, that you use
              in connection with its Services. The Company encourages you to
              consult directly with such third-parties about their privacy
              practices.
            </Text>
            <Text style={[styles.subheading]}>
              2. Collection of the information
            </Text>
            <Text style={[styles.txtprivacy]}>
              2.1. Some of our Services may be used without revealing any
              personal information, and for other Services, personal information
              is required. We may also collect ‘Non-Personal Information’ (i.e.,
              information that cannot be used to identify you). Non-Personal
              Information includes information like the web pages that you have
              viewed. In order to access certain features and benefits on our
              Services, you may need to submit ‘Personally Identifiable
              Information’ i.e., information that can be used to identify you
              (as described below). Inaccurate information may affect your
              ability to use the Services, the information you receive when
              using the Services, and our ability to contact you. For example,
              your email address and contact number should be kept valid because
              these may be the primary channels through which we communicate
              with you. You are responsible for ensuring the accuracy of the
              Personally Identifiable Information you submit to the Company.
            </Text>
          </ScrollView>
        </ExpandableView>

        {/* Anti phishing alert */}
        <Pressable
          style={[styles.cardstyle, styles.flexDirectionWithJustify]}
          onPress={() => showAntiPhising()}>
          <Text style={[styles.label]}> Anti Phishing Alert</Text>
          <Avatar
            icon={{
              name: !antiPhising ? 'right' : 'down',
              type: 'antdesign',
              color: !antiPhising ? colors.black : colors.AppDefaultColor,
              size: 25,
            }}
          />
        </Pressable>

        <ExpandableView show={antiPhising}>
          <ScrollView>
            <Text style={[styles.termheadingtxt]}>DAILY HOUSING</Text>
            <Text
              style={[
                styles.subheading,
                {alignSelf: 'center', marginLeft: '0%'},
              ]}>
              BEWARE! IT'S NOT US, BUT A SCAMSTER
            </Text>
            <Text style={[styles.txtprivacy]}>
              We have noticed that there have been several incidents where
              Meesho’s name is misused to collect personal information as well
              as to cheat and mislead the customers. Please note that such
              incidents are scam and must be immediately reported to us at
              legalsupport@dailyhouse.com. BEWARE of such frauds and phishing
              activities and by following these steps you can identify and
              safeguard yourself from such scamsters: Be vigilant. Please do not
              divulge any personal or sensitive data including bank details such
              as OTP, UPI/ATM PIN, CVV or credit/debit card details to anyone
              claiming to be a Meesho’s representative. Ensure that you do not
              click on any suspicious links or any unauthorized web portals or
              social media posts. Watch out for any suspicious calls, fake
              messages, unsolicited or spam e-mails and any communication sent
              to you by the unauthorized person(s) asking you to share any
              personal information malafidely under the pretext of processing
              refund claims, soliciting to participate in any unauthorized
              offers, lotteries, contests or scheme or asking for payment of
              money for such participation or to receive any award thereof or
              offering any job opportunity. Avoid paying any money or deposit
              funds to any person wrongfully claiming to be Meesho’s
              representative or job consultant(s). Neither Meesho nor any of
              it’s representative or authorized recruitment consultants take
              money or any other kind of payment for jobs. Report any incident
              which you believe to be fake or misleading, immediately to us to
              stay safe from such fraud or phishing. Ensure that you transact
              with us using the authorized channels of Meesho including it’s
              platform, approved social media pages or valid and genuine contact
              details to keep yourselves safe and secure from such fraud or
              phishing. We are concerned about the security of your online
              transactions with us and always strive to keep a safe and secure
              user experience for you. In case of any queries please reach out
              to us at legalsupport@dailyhouse.com
            </Text>
          </ScrollView>
        </ExpandableView>
        {/* return refund  */}
        <Pressable
          style={[styles.cardstyle, styles.flexDirectionWithJustify]}
          onPress={() => setIsReturen(!IsReturen)}>
          <Text style={[styles.label]}>
            Return, Refund and Replacement Policy
          </Text>
          <Avatar
            icon={{
              name: !IsReturen ? 'right' : 'down',
              type: 'antdesign',
              color: !IsReturen ? colors.black : colors.AppDefaultColor,
              size: 25,
            }}
          />
        </Pressable>

        <ExpandableView show={IsReturen}>
          <Text style={[styles.termheadingtxt]}>DAILY HOUSING</Text>
          <Text
            style={[
              styles.subheading,
              {alignSelf: 'center', marginLeft: '0%'},
            ]}>
            Returns, Refunds and Replacement Policy
          </Text>
          <Text style={[styles.txtprivacy]}>
            Returns, Refund and Replacement is the scheme provided by various
            sellers listed on Daily House website available at www.Daily
            House.com or the mobile application under the brand name “Meesho”
            (collectively “Platform”), in relation to specific products.
            Returns, refund and replacement policy gives you an option to
            return, replace or exchange items purchased on the Platform, for any
            reason within the specified return/exchange period, as detailed on
            the product details page. However, the return/exchange shall be
            eligible for products that are in good condition, as may be
            determined by Daily House.{' '}
          </Text>
          <Text style={[styles.subheading]}>What can I return??</Text>
          <Text style={[styles.txtprivacy]}>
            <Text style={[styles.txtprivacy]}>
              You may request returns for most items you buy from sellers and
              suppliers listed on the Platform that are within the return
              window. However, products that are explicitly identified as ‘not
              returnable’ on the product detail page cannot be returned. All
              returns are subject to other Sections of this policy. However, if
              you receive a damaged/defective/wrong product from any seller
              listed on the Platform, you will still be allowed
              return/replacement even if the product is categorized as
              ‘non-returnable’ in the product description. In case you have
              purchased a product with which a free product is delivered, and
              you raise a request for return the main product, you will have to
              return the free product as well. Further, a product which forms a
              part of a package of other products, you must return all products
              that form part of the package to process the refund. In
              circumstances where you return an extra or a different product,
              Meesho will not be accountable for misplacement or replacement of
              such product and will not be responsible for its delivery back to
              you,
            </Text>
          </Text>
          <Text style={[styles.subheading]}>What are the return options?</Text>
          <Text style={[styles.txtprivacy]}>
            Products on Meesho have two return options available: (a)
            Wrong/Defect item return option, and (b) all return option. If a
            product does not have the above-mentioned options for return, all
            return options will be applicable to the product.
          </Text>
        </ExpandableView>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LegalPoliciesScreen;
