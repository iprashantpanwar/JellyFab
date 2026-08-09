plugins {
    // this is necessary to avoid the plugins to be loaded multiple times
    // in each subproject's classloader
    alias(libs.plugins.androidApplication) apply false
    alias(libs.plugins.androidLibrary) apply false
    alias(libs.plugins.composeHotReload) apply false
    alias(libs.plugins.composeMultiplatform) apply false
    alias(libs.plugins.composeCompiler) apply false
    alias(libs.plugins.kotlinMultiplatform) apply false
    alias(libs.plugins.androidKotlinMultiplatformLibrary) apply false
    alias(libs.plugins.androidLint) apply false
    alias(libs.plugins.vanniktechPublish) apply false
    alias(libs.plugins.dokka) apply false
    alias(libs.plugins.binaryCompatibilityValidator)
}

apiValidation {
    ignoredProjects += listOf(
        "composeApp"
    )

    nonPublicMarkers += listOf(
        "androidx.compose.runtime.InternalComposeApi"
    )
}