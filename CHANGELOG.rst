RG Changelog
############

All notable changes to this project will be documented in this file.

The format is based on `Keep a Changelog <https://keepachangelog.com/en/1.0.0/>`_,
and this project adheres to customized Semantic Versioning e.g.: `quince-rg.1`

[Unreleased]
************

Fixed:
======
* Added position: relative property for correct z-index behavior on different MFEs [RGOeX-26826]
* Correct the z-index, fonts and paddings of the cookie banner [RGOeX-26418]

Added:
=====
* Added support for custom fonts if used in the project – it will be inherited by Paragon components (RGInt-424)
* Update the component to be compatible with redwood release (RGOeX-26785)
* Added z-index to the cookie banner wrapper (RGOeX-26418)

[palm-rg.1] 2023-11-03 (Palm RG release)
****************************************

Changed:
========
* Upgrade dependencies for palm release. Authn MFE's dependencies were taken as a reference [RGOeX-26026]

