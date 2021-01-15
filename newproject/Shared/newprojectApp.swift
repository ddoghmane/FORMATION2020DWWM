//
//  newprojectApp.swift
//  Shared
//
//  Created by DOGHMANE on 15/01/2021.
//

import SwiftUI

@main
struct newprojectApp: App {
    var body: some Scene {
        DocumentGroup(newDocument: newprojectDocument()) { file in
            ContentView(document: file.$document)
        }
    }
}
