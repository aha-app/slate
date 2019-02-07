This branch contains a snapshot of Slate 0.33.6, including backports from later versions of Slate. It's published as @aha-app/slate*.

Backports include:

* [Make insertTextAtRange normalize if it performed deletes](https://github.com/aha-app/slate/commit/8d167043998f47f698656bbb0e26743592a5cc8d) (Fixed in 0.41.0)
* [Initial fixes for IE compat of cloneFragment](https://github.com/ianstormtaylor/slate/pull/1943) (Fixed in 0.34.6)
* [Fix issue with pasting in IE](https://github.com/ianstormtaylor/slate/pull/1901) (Fixed in 0.33.7)
* [Fix drag-and-drop issues in IE11](https://github.com/ianstormtaylor/slate/pull/1967) (Fixed in 0.34.6)
* [Skip onNativeSelectionChange if Slate changed the selection](https://github.com/ianstormtaylor/slate/pull/1866) (Seems to be resolved in 0.34+)
