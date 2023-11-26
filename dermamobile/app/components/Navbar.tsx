import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showMenu, setShowMenu] = useState(true);

  const links = [
    {
      id: 1,
      link: "home",
      label: "Home",
    },
    {
      id: 2,
      link: "service",
      label: "Services",
    },
    {
      id: 3,
      link: "insurance",
      label: "Insurance",
    },
    {
      id: 4,
      link: "team",
      label: "Team",
    },
    {
      id: 5,
      link: "contact",
      label: "Book Now",
    },
  ];

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "#ffffff", // Adjust as needed
        borderBottomWidth: 1,
        borderBottomColor: "#ccc", // Adjust as needed
      }}
    >
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={() => {
          // Handle logo click
        }}
      >
        
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1e90ff" }}>
          Derma AI
        </Text>
      </TouchableOpacity>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {links.map(({ id, link, label }) => (
          <TouchableOpacity
            key={id}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
            }}
            onPress={() => {
              // Handle link click
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: showNavbar ? "#1e90ff" : "#1e90ff",
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => {
            // Handle menu button click
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: showNavbar ? "#1e90ff" : "#1e90ff",
            }}
          >
            ☰
          </Text>
        </TouchableOpacity>

        {showMenu && (
          <ScrollView
            style={{
              position: "absolute",
              top: 56, // Adjust as needed
              right: 0,
              zIndex: 50,
              width: 120,
              backgroundColor: "#fff",
              borderRadius: 8,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            {links.map(({ id, link, label }) => (
              <TouchableOpacity
                key={id}
                style={{
                  padding: 8,
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                }}
                onPress={() => {
                  // Handle menu item click
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#1e90ff",
                  }}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default Navbar;
