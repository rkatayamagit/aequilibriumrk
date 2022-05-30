/**
 * Licensed Materials - Property of aequilibrium
 * This is for assess expertise of QA expert.
 *  
 */

/*
author: @Rodrigo Katayama
*/

/// <reference types="cypress" />
import SwagLabsSignin from '../support/pages/signin'
import SwagLabsHomepage from '../support/pages/home'

describe('Access to SwagLabs', function () {
    beforeEach(() => {
        cy.fixture('credentials').as('user');
    });

    it('successful signin access in SwagLabs for Standard User', function () {

        SwagLabsSignin.go();
        SwagLabsSignin.signin('standardUser');
        SwagLabsSignin.submit();
        SwagLabsHomepage.home();

    })

    it('successful signin access in SwagLabs for Problem User', function () {

        SwagLabsSignin.go();
        SwagLabsSignin.signin('problemUser');
        SwagLabsSignin.submit();
        SwagLabsHomepage.home();

    })

    it('successful signin access in SwagLabs for Performance User', function () {

        SwagLabsSignin.go();
        SwagLabsSignin.signin('performanceUser');
        SwagLabsSignin.submit();
        SwagLabsHomepage.home();

    })

    context('authentication errors messages', function () {

        let errorText = ''

        it('Authentication error for locked user', function () {
            errorText = 'Epic sadface: Sorry, this user has been locked out.'
            SwagLabsSignin.go();
            SwagLabsSignin.signin('lockedUser');
            SwagLabsSignin.submit();
            SwagLabsSignin.alertShouldHaveText(errorText)
        });
        it('Authentication error when the "username" and "password" fields are in blank', function () {
            errorText = 'Epic sadface: Username is required'
            SwagLabsSignin.go();
            SwagLabsSignin.submit();
            SwagLabsSignin.alertShouldHaveText(errorText)
        });
        it('Authentication error when only the "username" fields is in blank and "password" filled out with correct value', function () {
            errorText = 'Epic sadface: Username is required'
            SwagLabsSignin.go();
            SwagLabsSignin.signinUserblank('EmptyUser');
            SwagLabsSignin.submit();
            SwagLabsSignin.alertShouldHaveText(errorText)
        });

        it('Authentication error when only the "password" field is in blank and "username" filled out with correct value', function () {
            errorText = 'Epic sadface: Password is required'
            SwagLabsSignin.go();
            SwagLabsSignin.signinPasswordblank('EmptyPassword');
            SwagLabsSignin.submit();
            SwagLabsSignin.alertShouldHaveText(errorText)
        });

        it('Authentication error when provide invalid user credentials', function () {
            errorText = 'Epic sadface: Username and password do not match any user in this service'
            SwagLabsSignin.go();
            SwagLabsSignin.signin('InvalidCredentials');
            SwagLabsSignin.submit();
            SwagLabsSignin.alertShouldHaveText(errorText)
        });
    })
});