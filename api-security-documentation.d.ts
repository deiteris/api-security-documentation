/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   api-security-documentation.html
 */

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../polymer/types/lib/elements/dom-if.d.ts" />
/// <reference path="../raml-aware/raml-aware.d.ts" />
/// <reference path="../markdown-styles/markdown-styles.d.ts" />
/// <reference path="../marked-element/marked-element.d.ts" />
/// <reference path="../iron-flex-layout/iron-flex-layout.d.ts" />
/// <reference path="../api-annotation-document/api-annotation-document.d.ts" />
/// <reference path="../api-parameters-document/api-parameters-document.d.ts" />
/// <reference path="../api-headers-document/api-headers-document.d.ts" />
/// <reference path="../api-responses-document/api-responses-document.d.ts" />
/// <reference path="../amf-helper-mixin/amf-helper-mixin.d.ts" />
/// <reference path="api-oauth2-settings-document.d.ts" />
/// <reference path="api-oauth1-settings-document.d.ts" />

declare namespace ApiElements {

  /**
   * `api-security-documentation`
   *
   * Documentation view for AMF security description
   *
   * ## Styling
   *
   * `<api-security-documentation>` provides the following custom properties and mixins for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--api-security-documentation` | Mixin applied to this elment | `{}`
   */
  class ApiSecurityDocumentation extends
    ApiElements.AmfHelperMixin(
    Polymer.Element) {

    /**
     * `raml-aware` scope property to use.
     */
    aware: string|null|undefined;

    /**
     * A security definition to render.
     * This should be AMF's type of `http://raml.org/vocabularies/security#SecurityScheme`.
     */
    security: object|null;

    /**
     * Security scheme type.
     */
    readonly type: string|null|undefined;
    readonly description: string|null|undefined;
    readonly hasDescription: boolean|null|undefined;
    readonly headers: any[]|null|undefined;
    readonly hasHeaders: any[]|null|undefined;
    readonly queryParameters: any[]|null|undefined;
    readonly hasQueryParameters: any[]|null|undefined;
    readonly responses: any[]|null|undefined;
    readonly hasResponses: any[]|null|undefined;
    readonly settings: any[]|null|undefined;
    readonly hasSettings: any[]|null|undefined;
    readonly isOauth2Settings: boolean|null|undefined;
    readonly isOauth1Settings: boolean|null|undefined;
    readonly isCustomSettings: boolean|null|undefined;

    /**
     * Computed value from current `method`. True if the model contains
     * custom properties (annotations in RAML).
     */
    readonly hasCustomProperties: boolean|null|undefined;

    /**
     * Computes value for `hasCustomProperties` property.
     *
     * @param shape AMF `supportedOperation` model
     */
    _computeHasCustomProperties(shape: object|null): Boolean|null;
    _computeType(shape: any): any;
    _computeSettings(shape: any): any;
    _computeIsOauth2Settings(hasSettings: any, settings: any): any;
    _computeIsOauth1Settings(hasSettings: any, settings: any): any;
    _computeIsCustomSettings(hasSettings: any, isOauth2Settings: any, isOauth1Settings: any, settings: any): any;
  }
}

interface HTMLElementTagNameMap {
  "api-security-documentation": ApiElements.ApiSecurityDocumentation;
}